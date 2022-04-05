from django.contrib import admin

from bloodBank.models.bloodBank import BloodBank


@admin.register(BloodBank)
class LeagueModelAdmin(admin.ModelAdmin):
    list_display = ("id", "blood_group", "donor", "collection_date")
    list_display_links = ("id", )

