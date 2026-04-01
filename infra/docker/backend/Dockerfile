FROM python:3.11

WORKDIR /app

COPY apps/backend/requirements/dev.txt /app/requirements.txt
RUN pip install -r /app/requirements.txt

COPY apps/backend /app/backend

WORKDIR /app/backend

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]