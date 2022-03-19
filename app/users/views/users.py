from rest_framework import mixins, status, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from url_filter.integrations.drf import DjangoFilterBackend

from users.models import User
from users.serializers.users import UserModelSerializer


class UserViewSet(
    mixins.CreateModelMixin,
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    mixins.ListModelMixin,
    viewsets.GenericViewSet,
):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer
    lookup_field = "username"

    filter_backends = [
        DjangoFilterBackend,
    ]

    filter_fields = [
        "userprofile",
    ]

    def get_permissions(self):
        """Assign permissions based on action."""
        permissions = [
            IsAuthenticated,
        ]
        return (permission() for permission in permissions)

    def get_queryset(self):
        """Overrides the queryset."""
        queryset = User.objects.prefetch_related("userprofile").filter()
        # Obtiene sólo usuarios verificados
        return queryset.filter(is_active=True)

    @action(detail=False, methods=["GET"])
    def me(self, request):
        serializer = UserModelSerializer(request.user, context={"request": request})
        return Response(status=status.HTTP_200_OK, data=serializer.data)
