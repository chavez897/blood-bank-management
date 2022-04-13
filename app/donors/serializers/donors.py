"""
Application name:               donors.py
Author/Programmer:              Alina Ejaz               
Date application created:       April 5th, 2022

This serializer helps to converting blood_bank table objects into json format.
The fields used are:
    *name
    *dob
    *gender
    *blood_group
    *address
    *phone
    *email
    *diseases
"""
from rest_framework import serializers

from donors.models.donors import Donors


class DonorsModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Donors
        fields = [
            "id",
            "name",
            "dob",
            "gender",
            "blood_group",
            "address",
            "phone",
            "email",
            "diseases"
        ]