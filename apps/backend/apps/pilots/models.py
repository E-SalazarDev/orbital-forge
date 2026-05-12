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
    
class PlayerRun(models.Model):
    
    class Status(models.TextChoices):
        ACTIVE = "activate", "Activate",
        COMPLETED = "completed", "Completed"
        ABANDONED = "abandoned", "Abandoned"
    
    IdPlayerRun = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    Nickname = models.CharField(max_length=64, blank=False)
    Level  = models.PositiveIntegerField(default=1)
    Xp = models.PositiveBigIntegerField(default=0)
    credits = models.PositiveIntegerField(default=0)
    Stataus = models.CharField(max_length=30, choices=Status.choices, default=Status.ACTIVE)
    
    CreatedAt = models.DateTimeField(auto_now=True)
    UpdatedAt = models.DateField(auto_now=True)
    
    game_session = models.OneToOneField(
        GameSession,
        on_delete=models.CASCADE,
        related_name="player_run"
    )
    
    def __str__(self):
        return self.Nickname or  f"PlayerRun {self.IdPlayerRun}"
        