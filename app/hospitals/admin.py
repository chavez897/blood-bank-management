from django.contrib import admin

from hospitals.models.hospitals import Hospital
@admin.register(Hospital)
class HospitalModelAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "city", "phone",)
    list_display_links = ("id", )

