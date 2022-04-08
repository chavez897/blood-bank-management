from rest_framework import serializers

from recipient.models.recipient import Recipients


class HospitalModelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Recipients
        fields = [
            "id",
            "name",
            "city",
            "address",
            "phone",
        ]