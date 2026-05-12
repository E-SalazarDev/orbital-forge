from django.db import models
import uuid
from django.conf import settings
# Create your models here.

class GameSession(models.Model):
    IdGameSession = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    SessionKey = models.CharField(max_length=64)
    IsGuest = models.BooleanField(default=True)
    CreateAt = models.DateTimeField(auto_now=True)
    LastSeenAt = models.DateTimeField(auto_now=True)
    
    User = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        null=True,
        blank=True,
        on_delete= models.SET_NULL,
        related_name="game_sessions",
    )
    
    def __str__(self):
        return self.SessionKey
    # UserId
    