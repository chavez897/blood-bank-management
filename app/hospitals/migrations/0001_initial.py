# Generated by Django 3.1.7 on 2022-04-08 21:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Hospital',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120, verbose_name='Name')),
                ('city', models.CharField(blank=True, max_length=50, null=True, verbose_name='City')),
                ('address', models.CharField(blank=True, max_length=500, null=True, verbose_name='City')),
                ('phone', models.CharField(max_length=13, verbose_name='Phone')),
            ],
        ),
    ]
