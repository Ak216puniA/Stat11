# Generated by Django 4.1.7 on 2023-04-20 20:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('stat11', '0004_team_bye_team_college_team_legbye_team_noball_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='match',
            name='tournament',
        ),
    ]
