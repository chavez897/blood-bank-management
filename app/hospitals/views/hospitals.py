from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from hospitals.models.hospitals import Hospital
from hospitals.serializers.hospitals import HospitalModelSerializer


class HospitalsViewSet(viewsets.ModelViewSet):
    queryset = Hospital.objects.all()
    serializer_class = HospitalModelSerializer

    def get_permissions(self):
        """Assign permissions based on action."""
        permissions = [
            IsAuthenticated,
        ]
        return (permission() for permission in permissions)


