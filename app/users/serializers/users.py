from django.contrib.auth import get_user_model

from rest_framework import serializers

User = get_user_model()



class UserModelSerializer(serializers.ModelSerializer):
    """ UserModelSerializer."""

    class Meta:
        model = User
        fields = (
            "id",
            "username",
            "name",
            "last_name",
            "email",
            "is_active",
            "is_verified",
        )
        read_only_fields = ("username",)

    def create(self, validated_date):
        return super(UserModelSerializer, self).create(validated_date)

