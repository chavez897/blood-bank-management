from django.contrib import admin
from transfusion.models.transfusion import Transfusion

@admin.register(Transfusion)
class TransfusionModelAdmin(admin.ModelAdmin):
    list_display = ("id", "recipient", "blood", "hospital",)
    list_display_links = ("id", )

