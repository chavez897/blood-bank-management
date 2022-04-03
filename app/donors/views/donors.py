from rest_framework import viewsets, filters
from url_filter.integrations.drf import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticated
from donors.serializers.donors import DonorsModelSerializer
from donors.models.donors import Donors


class DonorsViewSet(viewsets.ModelViewSet):
    queryset = Donors.objects.all()
    serializer_class = DonorsModelSerializer
    filter_backends = [
        DjangoFilterBackend,
    ]
    # For quick search
    filter_fields = ["blood_group",]

    def get_permissions(self):
        """Assign permissions based on action."""
        permissions = [
            IsAuthenticated,
        ]
        return (permission() for permission in permissions)


