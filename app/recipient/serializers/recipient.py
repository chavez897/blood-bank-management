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