from django.db import models

from apps.pilots.models import PlayerRun


class Ship(models.Model):
    class ShipClass(models.TextChoices):
        SCOUT = "scout", "Scout"
        FIGHTER = "fighter", "Fighter"
        INTERCEPTOR = "interceptor", "Interceptor"
        TANK = "tank", "Tank"
        BOMBER = "bomber", "Bomber"

    player_run = models.ForeignKey(
        PlayerRun,
        on_delete=models.CASCADE,
        related_name="ships",
    )
    name = models.CharField(max_length=80)
    ship_class = models.CharField(
        max_length=30,
        choices=ShipClass.choices,
        default=ShipClass.FIGHTER,
    )
    level = models.PositiveIntegerField(default=1)

    base_hull = models.PositiveIntegerField(default=100)
    base_shield = models.PositiveIntegerField(default=50)
    base_energy = models.PositiveIntegerField(default=100)
    base_speed = models.FloatField(default=1.0)

    active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class ShipPart(models.Model):
    class PartType(models.TextChoices):
        HULL = "hull", "Hull"
        CORE = "core", "Core"
        ENGINE = "engine", "Engine"
        LEFT_WING = "left_wing", "Left Wing"
        RIGHT_WING = "right_wing", "Right Wing"
        WEAPON_SYSTEM = "weapon_system", "Weapon System"
        SHIELD_GENERATOR = "shield_generator", "Shield Generator"

    class Status(models.TextChoices):
        ACTIVE = "active", "Active"
        DAMAGED = "damaged", "Damaged"
        DESTROYED = "destroyed", "Destroyed"

    ship = models.ForeignKey(
        Ship,
        on_delete=models.CASCADE,
        related_name="parts",
    )
    part_type = models.CharField(
        max_length=40,
        choices=PartType.choices,
    )
    max_hp = models.PositiveIntegerField()
    current_hp = models.PositiveIntegerField()
    armor = models.PositiveIntegerField(default=0)
    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.ACTIVE,
    )

    def __str__(self):
        return f"{self.ship.name} - {self.part_type}"