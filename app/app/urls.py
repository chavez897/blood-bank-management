from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token
from users.views.users import UserViewSet
from donors.views.donors import DonorsViewSet
from recipient.views.recipients import RecipientsViewSet
from bloodBank.views.bloodBank import BloodBankViewSet
from users.views.auth import (
    UserAuthNonAtomicViewSet,
    UserAuthViewSet,
)

router = routers.DefaultRouter()
router.register("auth", UserAuthViewSet, basename="auth")
router.register("auth", UserAuthNonAtomicViewSet, basename="auth_not_atomic")
router.register("users", UserViewSet)
router.register("donors", DonorsViewSet)
router.register("recipients", RecipientsViewSet)
router.register("bloodBank", BloodBankViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path("accounts/", include("allauth.urls")),
    path("auth-token/", obtain_auth_token),
    path('', include(router.urls)),
]
