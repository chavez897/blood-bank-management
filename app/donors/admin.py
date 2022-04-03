from django.contrib import admin

from donors.models.donors import Donors


@admin.register(Donors)
class LeagueModelAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "blood_group", "phone", "email")
    list_display_links = ("id", )

