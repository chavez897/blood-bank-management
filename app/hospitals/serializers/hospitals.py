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