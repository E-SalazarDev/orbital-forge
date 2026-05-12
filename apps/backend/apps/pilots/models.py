from django.db import models
import uuid
# Create your models here.

class GameSession(models.Model):
    IdGameSession = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    SessionKey = models.CharField(max_length=64)
    IsGuest = models.BooleanField(default=True)
    CreateAt = models.DateTimeField(auto_now=True)
    LastSeenAt = models.DateTimeField(auto_now=True)
    
    # UserId
    