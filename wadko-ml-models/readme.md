# Projekt Modeli Uczenia Maszynowego

## Opis Projektu

To repozytorium zawiera modele uczenia maszynowego wytrenowane w ramach projektu. Modele te zostały opracowane do rozwiązania określonych problemów i zastosowań.

## Modele

### Model 1: [Digits]

- **Opis:** Klasyfikacja liczb.

- **Eksport Hiperparametrów:** Hiperparametry tego modelu zostały wyeksportowane do pliku JSON i są dostępne w pliku `model_architecture_digit.json`.

### Model 2: [Cats_vs_Dogs]

- **Opis:** Identyfiakcja i klasyfikacja kotów.psów.

- **Eksport Hiperparametrów:** Hiperparametry modelu Cat_vs_Dogs są dostępne w pliku `model_piekorz_1.pkl`.

## Jak Uruchomić

W celu skorzystania z tych modeli w swoim projekcie, wykonaj następujące kroki:

1. Sklonuj to repozytorium na swój lokalny komputer.
2. Zaimportuj modele do swojej aplikacji, korzystając z odpowiednich bibliotek lub frameworków do uczenia maszynowego.
3. Wczytaj hiperparametry z pliku JSON, aby skonfigurować modele zgodnie z ich oryginalnymi ustawieniami.



```python
from fastai import *
from fastai.vision import *
from fastai.vision.all import *
from fastai.metrics import error_rate
import os
from pathlib import Path
model_export = load_learner('export.pkl')
# Path to a new Image
image_path = 'kot.jpg'

# Upload new Img
img = PILImage.create(image_path)

# Prediction
pred, _, _ = model_export.predict(img)
print(pred)
```
```python
import json

# Wczytaj hiperparametry modelu 1
with open('hiperparametry_modelu1.json', 'r') as file:
    hiperparametry_modelu1 = json.load(file)

# Wczytaj hiperparametry modelu 2
with open('hiperparametry_modelu2.json', 'r') as file:
    hiperparametry_modelu2 = json.load(file)
