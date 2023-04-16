# Generated by Django 4.1.7 on 2023-04-15 13:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('stat11', '0004_alter_batterscoreboard_balls_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='batterscoreboard',
            name='bowled_out_by',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='bowled_out_by', to='stat11.player'),
        ),
        migrations.AlterField(
            model_name='batterscoreboard',
            name='entry_time',
            field=models.TimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='batterscoreboard',
            name='exit_time',
            field=models.TimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='batterscoreboard',
            name='wicket_taker',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='wicket_taker', to='stat11.player'),
        ),
        migrations.AlterField(
            model_name='bowlerscoreboard',
            name='entry_time',
            field=models.TimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='bowlerscoreboard',
            name='exit_time',
            field=models.TimeField(blank=True, null=True),
        ),
    ]
