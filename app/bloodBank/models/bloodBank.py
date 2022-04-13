"""
Application name:               bloodbank.py
Author/Programmer:              Rodrigo Chavez Mercado
Date application created:       April 6th, 2022

This model helps to define the strucutre of stored data.
The fields used are:
    *id
    *blood_group
    *donor
    *collection_date
    *expiry_date
    *total_volume
    *donor_info
"""

from django.db import models
    
class BloodGroup(models.TextChoices):
    A_POSITIVE = "A+", "A positive"
    A_NEGATIVE = "A-", "A negative"
    B_POSITIVE = "B+", "B positive"
    B_NEGATIVE = "B-", "B negative"
    AB_POSITIVE = "AB+", "AB positive"
    AB_NEGATIVE = "AB-", "AB negative"
    O_POSITIVE = "O+", "O positive"
    O_NEGATIVE = "O-", "O negative"

class BloodBank(models.Model):

    blood_group = models.CharField(
        verbose_name="Blood Group",
        max_length=3,
        choices=BloodGroup.choices,
        blank=False,
        null=False,
        default=BloodGroup.A_POSITIVE
    )

    donor = models.ForeignKey(
        verbose_name="Donor",
        to="donors.Donors",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
    )

    collection_date = models.DateField(
        verbose_name="Collection Date",
        auto_now_add=False,
        blank=False,
        null=False,
    )

    expiry_date = models.DateField(
        verbose_name="Expiry Date",
        auto_now_add=False,
        blank=False,
        null=False,
    )

    total_volume = models.IntegerField(
        verbose_name="Total Volume",
        blank=False, 
        null=False
    )

    def __str__(self):
        return "{} - {}".format(self.donor.name, self.collection_date)
