# Generated by Django 4.1.7 on 2023-04-19 19:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stat11', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='team',
            name='name',
            field=models.CharField(max_length=255),
        ),
    ]
