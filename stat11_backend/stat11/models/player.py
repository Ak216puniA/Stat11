from django.db import models
from django.utils.translation import gettext_lazy as _
from .user import User

class Typeofplayer(models.TextChoices):
    BATTER = 'batter', _('Batter')
    BOWLER = 'bowler', _('Bowler')
    ALL_ROUNDER = 'all_rounder', _('All Rounder')

class Player(models.Model):
    person=models.ForeignKey(User, on_delete=models.CASCADE)
    created_on=models.DateField(auto_now_add=True)
    type=models.CharField(max_length=16, choices=Typeofplayer.choices, default=Typeofplayer.BATTER, blank=False)

