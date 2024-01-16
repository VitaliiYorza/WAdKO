"""
File: image_scan_model.py
Description: Definition of the ImageScanModel class for image scanning and prediction.

"""
class ImageScanModel():
    """
       Represents a model for image scanning and prediction.

       Attributes:
           imageBase64URL (str): Base64-encoded image data.
           imageItemType (str): Type of the image item ('Number', 'Cat', etc.).
           result (str): Result of the image scan or prediction.
       """
    def __init__(self, imageBase64URL, imageItemType, result):
        """
            Initializes an instance of the ImageScanModel class.

            Args:
                imageBase64URL (str): Base64-encoded image data.
                imageItemType (str): Type of the image item ('Number', 'Cat', etc.).
                result (str): Result of the image scan or prediction.
        """
        self.imageBase64URL = imageBase64URL
        self.imageItemType = imageItemType
        self.result = result

    def __str__(self):
        """
            Returns a string representation of the ImageScanModel instance.

            Returns:
                str: String representation of the instance.
        """
        return f"ImageScanModel(imageBase64URL={self.imageBase64URL}, imageItemType={self.imageItemType}, result={self.result})"

    def to_dict(self):
        """
            Converts the instance to a dictionary.

            Returns:
                dict: Dictionary representation of the instance.
        """
        # Convert the object to a dictionary
        return {
            'imageBase64URL': self.imageBase64URL,
            'imageItemType': self.imageItemType,
            'result': self.result
        }

    @classmethod
    def from_dict(cls, data):
        """
            Creates an instance of ImageScanModel from a dictionary.

            Args:
                data (dict): Dictionary containing the image scan data.

            Returns:
                ImageScanModel: Instance of the ImageScanModel class.
        """
        return cls(
            imageBase64URL=data['imageBase64URL'],
            imageItemType=data['imageItemType'],
            result=data['result']
        )
    
    def to_json(self):
        """
        Converts the instance to a JSON object.

        Returns:
            dict: JSON representation of the instance.
        """
        return {
            'imageBase64URL': self.imageBase64URL,
            'imageItemType': self.imageItemType,
            'result': self.result
        }
    
    @classmethod
    def from_json(cls, json_data):
        """
            Creates an instance of ImageScanModel from a JSON object.

            Args:
                json_data (dict): JSON object containing the image scan data.

            Returns:
                ImageScanModel: Instance of the ImageScanModel class.
        """
        return cls(
            imageBase64URL=json_data['imageBase64URL'],
            imageItemType=json_data['imageItemType'],
            result=json_data['result']
        )