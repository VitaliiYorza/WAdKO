from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from image_scan_model import ImageScanModel
from PIL import Image
import base64
import io
from fastai.vision.all import *
import PIL
import os
import cv2
from keras.models import model_from_json
import tensorflow as tf
import numpy as np

app = Flask(__name__)

# set safe origins from which api can be obtained
CORS(app, origins=["http://localhost:4200"])
# CORS(app)

# connect with ML app here 

def process_data(soup, image):

    print("przeszło")
    if soup == "Number":
        return predict_digit(image)
    elif soup == "Cat":
        return predict_cat(image)
    # TODO DOG

def predict_cat(data):
    loaded_model = model_from_json(json.load(open(getPath('../wadko-ml-models/model_architecture.json'), 'r')))

    model_export = load_learner(getPath('../wadko-ml-models/model_piekorz_1.pkl'))
    
    img = PILImage.create(data)
    img = img.resize((150, 150))


    image_array = np.array(img)
    image_array = image_array.reshape((1,) + image_array.shape)  # Adjust as needed
    # pred = loaded_model.predict(image_array)

    pred, _, _ = model_export.predict(img)
    print(pred)
    return pred

def predict_digit(data):
    loaded_model = model_from_json(json.load(open(getPath('../wadko-ml-models/model_architecture_digit.json'), 'r')))
    image = cv2.imread(data, cv2.IMREAD_GRAYSCALE)

    image = cv2.resize(image, (28, 28))
    image_array = np.array(image)
    inverted_image = 255 - image_array

    img = inverted_image / 255.0
    img = img.reshape(784)
    img = img.reshape(1, -1)

    y_pred = loaded_model.predict(img)
    predicted_class = np.argmax(y_pred)
    return ("Prediction:", predicted_class)

def decode_base64_image(data_uri):
    # Remove the data URI prefix if it exists
    if data_uri.startswith('data:'):
        parts = data_uri.split(',')
        if len(parts) > 1:
            return base64.b64decode(parts[1])
    return None

def getPath(path):
    # Get the path of the current script
    current_script_path = os.path.abspath(__file__)

    # Join the script path with the filename 'output.jpg'
    return os.path.join(os.path.dirname(current_script_path), path)

@app.route('/scanImage', methods=['POST'])
@cross_origin(origins="localhost")
def scan_image():
    # print(request.get_json())
    try:
        data = request.get_json()
        image_scan = ImageScanModel.from_json(data)
        # print(image_scan)

        # Retrieve the Base64 encoded image and convert it to .jpg
        if image_scan.imageBase64URL:
            image_data = decode_base64_image(image_scan.imageBase64URL)
            image = Image.open(io.BytesIO(image_data))
            image.save('output.jpg', 'JPEG')

            print(image_scan.imageItemType)
            # image_scan.result = process_data(image_scan.imageItemType, getPath('output.jpg'))
            if (image_scan.imageItemType == 'Cat' or image_scan.imageItemType == 'Dog'):
                image_scan.result = True if process_data(image_scan.imageItemType, getPath('output.jpg')) == image_scan.imageItemType else False
            else:
                image_scan.result = process_data(image_scan.imageItemType, getPath('output.jpg'))


            print(image_scan.result)
            # print(image_scan.result)
            # image.show()

        return image_scan.to_json(), 201
    except Exception as e:
        print(e)
        return jsonify({'error': str(e)}), 400

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8081, debug=True)