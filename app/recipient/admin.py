from django.contrib import admin

from recipient.models.recipient import Recipients

@admin.register(Recipients)
class RecipientsModelAdmin(admin.ModelAdmin):
    list_display = ("id", "name", "blood_group", "phone", "email")
    list_display_links = ("id", )

