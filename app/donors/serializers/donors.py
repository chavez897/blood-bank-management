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