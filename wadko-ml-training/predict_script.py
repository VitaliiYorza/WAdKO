from fastai.vision.all import *
import PIL

# Załaduj model
model_export = load_learner('export.pkl')

# Ścieżka do nowego obrazu
image_path = 'kot.jpg'

# Wczytaj nowy obraz
img = PIL.Image.create(image_path)

# Przewidywanie
pred, _, _ = model_export.predict(img)
print(pred)