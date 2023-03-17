from dataclasses import fields
from rest_framework import serializers
from models.models import *


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        