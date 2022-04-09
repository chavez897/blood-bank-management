from bloodBank.models.bloodBank import BloodBank
from rest_framework import serializers

from transfusion.models.transfusion import Transfusion
from recipient.serializers.recipient import RecipientsModelSerializer
from hospitals.serializers.hospitals import HospitalModelSerializer


class TransfusionModelSerializer(serializers.ModelSerializer):
    hospital_info = HospitalModelSerializer(read_only=True, source='hospital')
    recipient_info = RecipientsModelSerializer(
        read_only=True, source='recipient')

    class Meta:
        model = Transfusion
        fields = [
            "id",
            "user",
            "hospital",
            "recipient",
            "blood",
            "transfusion_date",
            "volume",
            "hospital_info",
            "recipient_info",
        ]

    def validate(self, attrs):
        if self.instance is not None:
            difference = attrs["volume"] - self.instance.volume
        else:
            difference = attrs["volume"]
        stock = BloodBank.objects.get(pk=attrs["blood"].id)
        if difference > stock.total_volume:
            raise serializers.ValidationError(
                {"volume": "Not enough volume"}
            )
        stock.total_volume = stock.total_volume - difference
        stock.save()
        return attrs
