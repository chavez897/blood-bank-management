from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from transfusion.models.transfusion import Transfusion
from transfusion.serializers.transfusion import TransfusionModelSerializer


class TransfusionViewSet(viewsets.ModelViewSet):
    queryset = Transfusion.objects.all()
    serializer_class = TransfusionModelSerializer

    def get_permissions(self):
        """Assign permissions based on action."""
        permissions = [
            IsAuthenticated,
        ]
        return (permission() for permission in permissions)


