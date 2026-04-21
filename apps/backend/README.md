<!-- activar entorno virtual -->
python -m venv .venv

<!-- activar entorno virtual -->

.venv\Scripts\activate


<!-- Guardar instlaciones -->
pip freeze > requirements\dev.txt

<!-- instalar dependencias   -->

pip install -r requirements/dev.txt