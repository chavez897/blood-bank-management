from rest_framework import serializers

from bloodBank.models.bloodBank import BloodBank
from donors.serializers.donors import DonorsModelSerializer


class TransfusionModelSerializer(serializers.ModelSerializer):
    donor_info = DonorsModelSerializer(read_only=True, source='donor')

    class Meta:
        model = BloodBank
        fields = [
            "user",
            "hospital ",
            "recipient ",
            "blood",
            "transfusion_date",
            "volume"
        ]
