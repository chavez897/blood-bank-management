from rest_framework import serializers

from transfusion.models.transfusion import Transfusion
from recipient.serializers.recipient import RecipientsModelSerializer
from hospitals.serializers.hospitals import HospitalModelSerializer

class TransfusionModelSerializer(serializers.ModelSerializer):
    hospital_info = HospitalModelSerializer(read_only=True, source='hospital')
    recipient_info = RecipientsModelSerializer(read_only=True, source='recipient')

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
