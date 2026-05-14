import uuid

from django.db import models


class Equipment(models.Model):
    class EquipmentType(models.TextChoices):
        WEAPON = "weapon", "Weapon"
        SHIELD = "shield", "Shield"
        ENGINE = "engine", "Engine"
        MODULE = "module", "Module"

    class Rarity(models.TextChoices):
        COMMON = "common", "Common"
        RARE = "rare", "Rare"
        EPIC = "epic", "Epic"
        LEGENDARY = "legendary", "Legendary"

    class ProjectileType(models.TextChoices):
        NONE = "none", "None"
        HITSCAN = "hitscan", "Hitscan"
        PROJECTILE = "projectile", "Projectile"
        MISSILE = "missile", "Missile"

    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False,
    )

    name = models.CharField(max_length=100)

    equipment_type = models.CharField(
        max_length=30,
        choices=EquipmentType.choices,
    )

    rarity = models.CharField(
        max_length=20,
        choices=Rarity.choices,
        default=Rarity.COMMON,
    )

    level_required = models.PositiveIntegerField(default=1)

    damage = models.PositiveIntegerField(default=0)

    defense = models.PositiveIntegerField(default=0)

    energy_cost = models.PositiveIntegerField(default=0)

    cooldown_seconds = models.FloatField(default=0.0)

    projectile_type = models.CharField(
        max_length=20,
        choices=ProjectileType.choices,
        default=ProjectileType.NONE,
    )

    range = models.FloatField(default=0.0)

    price = models.PositiveIntegerField(default=0)

    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.name