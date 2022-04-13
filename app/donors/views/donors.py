"""
Application name:               donors.py
Author/Programmer:              Alina Ejaz               
Date application created:       April 5th, 2022

This view allows to perform insert, select, search, update and delete
operations in the donor table. All of these operations are only allowed 
for logged in users. You will be able to look by blood_group
"""

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


