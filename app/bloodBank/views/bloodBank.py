from rest_framework import viewsets, filters
from url_filter.integrations.drf import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticated
from bloodBank.models.bloodBank import BloodBank
from bloodBank.serializers.bloodBank import BloodBankModelSerializer


class BloodBankViewSet(viewsets.ModelViewSet):
    queryset = BloodBank.objects.all()
    serializer_class = BloodBankModelSerializer
    filter_backends = [
        DjangoFilterBackend,
    ]
    # For quick search
    filter_fields = ["blood_group", "expiry_date", "total_volume"]

    def get_permissions(self):
        """Assign permissions based on action."""
        permissions = [
            IsAuthenticated,
        ]
        return (permission() for permission in permissions)


