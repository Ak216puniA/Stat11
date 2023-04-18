# Generated by Django 4.1.7 on 2023-04-16 17:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('stat11', '0006_team_bye_team_college_team_legbye_team_noball_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='team',
            old_name='noball',
            new_name='no_ball',
        ),
        migrations.RemoveField(
            model_name='match',
            name='tournament',
        ),
        migrations.AlterField(
            model_name='team',
            name='college',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]