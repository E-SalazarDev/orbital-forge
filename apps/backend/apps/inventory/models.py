from django.db import models

# Create your models here.
class ShipEquipament(models.Model): 
    IdShipEquipament = models.UUIDField(primary_key=True, default=False)
    Slot = models.CharField(max_length=60)
    EquippedAt = models.DateTimeField(auto_now_add=True)
    