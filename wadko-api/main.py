from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from image_scan_model import ImageScanModel
from PIL import Image
import base64
import io

app = Flask(__name__)

# set safe origins from which api can be obtained
CORS(app, origins=["http://localhost:4200"])
# CORS(app)

# connect with ML app here 


def decode_base64_image(data_uri):
    # Remove the data URI prefix if it exists
    if data_uri.startswith('data:'):
        parts = data_uri.split(',')
        if len(parts) > 1:
            return base64.b64decode(parts[1])
    return None


@app.route('/scanImage', methods=['POST'])
@cross_origin(origins="localhost")
def scan_image():
    # print(request.get_json())
    try:
        data = request.get_json()
        image_scan = ImageScanModel.from_json(data)

        # Set result if photo is valid or not
        image_scan.result = False

        # Retrieve the Base64 encoded image and convert it to .jpg
        if image_scan.imageBase64URL:
            image_data = decode_base64_image(image_scan.imageBase64URL)
            image = Image.open(io.BytesIO(image_data))
            image.save('output.jpg', 'JPEG')
            image.show()

        return image_scan.to_json(), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8081, debug=True)