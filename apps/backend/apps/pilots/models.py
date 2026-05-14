import uuid

from django.conf import settings
from django.db import models


class GameSession(models.Model):
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False,
    )

    session_key = models.CharField(
        max_length=64,
        unique=True,
    )

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name="game_sessions",
    )

    is_guest = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    last_seen_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.session_key


class PlayerRun(models.Model):
    class Status(models.TextChoices):
        ACTIVE = "active", "Active"
        COMPLETED = "completed", "Completed"
        ABANDONED = "abandoned", "Abandoned"

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False,
    )

    game_session = models.OneToOneField(
        GameSession,
        on_delete=models.CASCADE,
        related_name="player_run",
    )

    nickname = models.CharField(
        max_length=64,
        blank=False,
    )

    level = models.PositiveIntegerField(default=1)

    xp = models.PositiveBigIntegerField(default=0)

    credits = models.PositiveIntegerField(default=0)

    status = models.CharField(
        max_length=30,
        choices=Status.choices,
        default=Status.ACTIVE,
    )

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.nickname or f"PlayerRun {self.id}"