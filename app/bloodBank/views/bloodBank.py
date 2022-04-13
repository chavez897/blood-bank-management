"""
Application name:               bloodbank.py
Author/Programmer:              Rodrigo Chavez Mercado
Date application created:       April 6th, 2022

This view allows to perform insert, select, search, update and delete
operations in the blood bank table. All of these operations are only allowed 
for logged in users. The fields you will be able to look for are blood_group,
expiry_date and total_volume
"""

from rest_framework import viewsets, filters
from url_filter.integrations.drf import DjangoFilterBackend
from rest_framework.permissions import IsAuthenticated
from bloodBank.models.bloodBank import BloodBank
from bloodBank.serializers.bloodBank import BloodBankModelSerializer


class BloodBankViewSet(viewsets.ModelViewSet):
    queryset = BloodBank.objects.all()
    serializer_class = BloodBankModelSerializer
    
    # For quick search
    filter_backends = [
        DjangoFilterBackend,
    ]
    filter_fields = ["blood_group", "expiry_date", "total_volume"]

    # Only authenticated users
    def get_permissions(self):
        """Assign permissions based on action."""
        permissions = [
            IsAuthenticated,
        ]
        return (permission() for permission in permissions)


