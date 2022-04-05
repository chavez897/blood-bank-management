from rest_framework import serializers

from bloodBank.models.bloodBank import BloodBank
from donors.serializers.donors import DonorsModelSerializer


class BloodBankModelSerializer(serializers.ModelSerializer):
    donor_info = DonorsModelSerializer(read_only=True, source='donor')

    class Meta:
        model = BloodBank
        fields = [
            "id",
            "blood_group",
            "donor",
            "collection_date",
            "expiry_date",
            "total_volume",
            "donor_info"
        ]