from rest_framework import viewsets, filters
from rest_framework.permissions import IsAuthenticated
from recipient.serializers.recipient import RecipientsModelSerializer
from recipient.models.recipient import Recipients


class RecipientsViewSet(viewsets.ModelViewSet):
    queryset = Recipients.objects.all()
    serializer_class = RecipientsModelSerializer
    filter_backends = [
        filters.SearchFilter,
    ]
    # For quick search
    search_fields = [
        'name',
    ]

    def get_permissions(self):
        """Assign permissions based on action."""
        permissions = [
            IsAuthenticated,
        ]
        return (permission() for permission in permissions)


