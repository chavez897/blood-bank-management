"""
Application name:               transfusion.py
Author/Programmer:              Rodrigo Chavez Mercado
Date application created:       April 8th, 2022

This serializer helps to converting transfusion table objects into json format.
The fields used are:
    *id
    *user
    *hospital
    *recipient
    *blood
    *transfusion_date
    *volume
"""


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
        """
        Function name:                      validate
        Author/Programmer:                  Rodrigo Chavez Mercado
        Date function was implemented:      April 8th, 2022

        The function receives as parameter the data of the reques.
        :return: None

        It will validate that enough blood volume is in stock and will
        update the stock
    """
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
