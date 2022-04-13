"""
Application name:               recipient.py
Author/Programmer:              Alina Ejaz               
Date application created:       April 4th, 2022

This serializer helps to converting recipient table objects into json format.
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

from recipient.models.recipient import Recipients


class RecipientsModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Recipients
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