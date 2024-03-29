# Generated by Django 4.1.7 on 2023-04-18 20:56

from django.conf import settings
import django.contrib.auth.models
import django.contrib.auth.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('first_name', models.CharField(blank=True, max_length=150, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('email', models.CharField(max_length=255, unique=True)),
                ('photo', models.ImageField(blank=True, default=None, max_length=255, null=True, upload_to='')),
                ('date_joined', models.DateField(auto_now_add=True)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Match',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_on', models.DateField(auto_now_add=True)),
                ('date', models.DateField()),
                ('time', models.TimeField()),
                ('overs_no', models.IntegerField()),
                ('location', models.CharField(blank=True, max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Player',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_on', models.DateField(auto_now_add=True)),
                ('type', models.CharField(choices=[('batter', 'Batter'), ('bowler', 'Bowler'), ('all_rounder', 'All Rounder')], default='batter', max_length=16)),
                ('person', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Tournament',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('start', models.DateField(blank=True, null=True)),
                ('end', models.DateField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, unique=True)),
                ('flag', models.ImageField(blank=True, max_length=255, null=True, upload_to='')),
                ('toss', models.BooleanField(default=False)),
                ('turn', models.BooleanField(default=False)),
                ('college', models.CharField(blank=True, max_length=255, null=True)),
                ('no_ball', models.IntegerField(default=0)),
                ('legbye', models.IntegerField(default=0)),
                ('bye', models.IntegerField(default=0)),
                ('wide', models.IntegerField(default=0)),
                ('match', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='stat11.match')),
                ('players', models.ManyToManyField(to='stat11.player')),
            ],
        ),
        migrations.CreateModel(
            name='BowlerScoreboard',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('runs', models.IntegerField(default=0)),
                ('balls', models.IntegerField(default=0)),
                ('wickets', models.IntegerField(default=0)),
                ('maidens', models.IntegerField(default=0)),
                ('status', models.CharField(choices=[('bowling', 'Bowling'), ('idle', 'Idle')], default='idle', max_length=10)),
                ('entry_time', models.TimeField(blank=True, null=True)),
                ('exit_time', models.TimeField(blank=True, null=True)),
                ('player', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='stat11.player')),
                ('team', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='stat11.team')),
            ],
        ),
        migrations.CreateModel(
            name='BatterScoreboard',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('runs', models.IntegerField(default=0)),
                ('balls', models.IntegerField(default=0)),
                ('fours', models.IntegerField(default=0)),
                ('sixes', models.IntegerField(default=0)),
                ('status', models.CharField(choices=[('yet_to_bat', 'Yet To Bat'), ('batting', 'Batting'), ('not_out', 'Not Out'), ('out', 'Out')], default='yet_to_bat', max_length=16)),
                ('wicket_type', models.CharField(choices=[('bowled', 'Bowled'), ('catch', 'Catch'), ('run_out', 'Run Out'), ('lbw', 'LBW'), ('stumped', 'Stumped')], default='bowled', max_length=16)),
                ('entry_time', models.TimeField(blank=True, null=True)),
                ('exit_time', models.TimeField(blank=True, null=True)),
                ('bowled_out_by', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='bowled_out_by', to='stat11.player')),
                ('player', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='player', to='stat11.player')),
                ('team', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='stat11.team')),
                ('wicket_taker', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='wicket_taker', to='stat11.player')),
            ],
        ),
    ]
