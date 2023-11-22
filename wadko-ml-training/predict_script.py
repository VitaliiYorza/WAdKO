from fastai.vision.all import *
import PIL

def predict_image(image_path, model_path='export.pkl'):
    """
    Predicts the class of an image using a pre-trained fastai vision model.

    Parameters:
    - image_path (str): The path to the image file to be classified.
    - model_path (str, optional): The path to the pre-trained model file (export.pkl).
                                 Defaults to 'export.pkl' in the current directory.

    Returns:
    - str: The predicted class of the input image.

    Example:
    >>> image_path = 'kot.jpg'
    >>> prediction = predict_image(image_path)
    >>> print(f'Prediction: {prediction}')
    """
    # Load the model
    model_export = load_learner(model_path)

    # Load the image
    img = PIL.Image.create(image_path)

    # Make a prediction
    pred, _, _ = model_export.predict(img)
    
    return pred

if __name__ == "__main__":