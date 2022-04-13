"""
This class helps to define regoiter the model for django admin panel.
The fields to show are:
    *id
    *blood_group
    *donor
    *collection_date
"""

from django.contrib import admin

from bloodBank.models.bloodBank import BloodBank


@admin.register(BloodBank)
class LeagueModelAdmin(admin.ModelAdmin):
    list_display = ("id", "blood_group", "donor", "collection_date")
    list_display_links = ("id", )

