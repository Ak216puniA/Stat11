from django.db import models
from .match import Match
from .player import Player

class Team(models.Model):
    match=models.ForeignKey(Match, on_delete=models.CASCADE)
    name=models.CharField(max_length=255 ,unique=True)
    players=models.ManyToManyField(Player)
    flag=models.ImageField(max_length=255, blank=True, null=True)
    toss=models.BooleanField(default=False)
    turn=models.BooleanField(default=False)
