# Generated by Django 3.0.7 on 2021-07-15 18:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=240, verbose_name='Name')),
                ('email', models.EmailField(max_length=254)),
                ('registrationDate', models.DateField(auto_now_add=True, verbose_name='Registration Date')),
                ('group', models.CharField(max_length=30, verbose_name='Group')),
            ],
        ),
    ]
