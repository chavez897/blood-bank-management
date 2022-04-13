"""
Application name:               hospitals.py
Author/Programmer:              Rodrigo Chavez Mercado
Date application created:       April 8th, 2022

This model helps to define the strucutre of stored data.
The fields used are:
    *id
    *name
    *city
    *address
    *phone
"""

from django.db import models


class Hospital(models.Model):

    name = models.CharField(
        verbose_name="Name", 
        max_length=120, 
        blank=False, 
        null=False
    )

    city = models.CharField(
        verbose_name="City", 
        max_length=50, 
        blank=True, 
        null=True
    )

    address = models.CharField(
        verbose_name="City", 
        max_length=500, 
        blank=True, 
        null=True
    )

    phone = models.CharField(
        verbose_name="Phone", 
        max_length=13, 
        blank=False,
        null=False
    )

    def __str__(self):
        return "{}".format(self.name)
