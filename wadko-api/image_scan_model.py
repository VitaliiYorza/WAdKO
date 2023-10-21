class ImageScanModel():

    def __init__(self, imageBase64URL, imageItemType, result):
        self.imageBase64URL = imageBase64URL
        self.imageItemType = imageItemType
        self.result = result

    def __str__(self):
        return f"ImageScanModel(imageBase64URL={self.imageBase64URL}, imageItemType={self.imageItemType}, result={self.result})"

    def to_dict(self):
        # Convert the object to a dictionary
        return {
            'imageBase64URL': self.imageBase64URL,
            'imageItemType': self.imageItemType,
            'result': self.result
        }

    @classmethod
    def from_dict(cls, data):
        # Create an instance of ImageScanModel from a dictionary
        return cls(
            imageBase64URL=data['imageBase64URL'],
            imageItemType=data['imageItemType'],
            result=data['result']
        )
    
    def to_json(self):
        # Convert the instance to a JSON object
        return {
            'imageBase64URL': self.imageBase64URL,
            'imageItemType': self.imageItemType,
            'result': self.result
        }
    
    @classmethod
    def from_json(cls, json_data):
        # Create an instance of ImageScanModel from a JSON object
        return cls(
            imageBase64URL=json_data['imageBase64URL'],
            imageItemType=json_data['imageItemType'],
            result=json_data['result']
        )