"""
Application name:               hospitals.py
Author/Programmer:              Rodrigo Chavez Mercado
Date application created:       April 8th, 2022

This serializer helps to converting hospitals table objects into json format.
The fields used are:
    *id
    *name
    *city
    *address
    *phone
"""

from rest_framework import serializers

from hospitals.models.hospitals import Hospital

class HospitalModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Hospital
        fields = [
            "id",
            "name",
            "city",
            "address",
            "phone",
        ]