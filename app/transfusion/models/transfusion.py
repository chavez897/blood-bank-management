from django.db import models


class Transfusion(models.Model):

    user = models.ForeignKey(
        verbose_name="User",
        to="users.User",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
    )

    hospital = models.ForeignKey(
        verbose_name="Hospital",
        to="hospitals.Hospital",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
    )

    recipient = models.ForeignKey(
        verbose_name="Recipients",
        to="recipient.Recipients",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
    )

    blood = models.ForeignKey(
        verbose_name="Blood Bank",
        to="bloodBank.BloodBank",
        on_delete=models.CASCADE,
        null=False,
        blank=False,
    )

    transfusion_date = models.DateField(
        verbose_name="Expiry Date",
        auto_now_add=False,
        blank=False,
        null=False,
    )

    volume = models.IntegerField(
        verbose_name="Volume",
        blank=False, 
        null=False
    )

    def __str__(self):
        return "{}".format(self.recipient)
