from django.db import models


class BloodGroup(models.TextChoices):
    A_POSITIVE = "A+", "A positive"
    A_NEGATIVE = "A-", "A negative"
    B_POSITIVE = "B+", "B positive"
    B_NEGATIVE = "B-", "B negative"
    AB_POSITIVE = "AB+", "AB positive"
    AB_NEGATIVE = "AB-", "AB negative"
    O_POSITIVE = "O+", "O positive"
    O_NEGATIVE = "O-", "O negative"

class Gender(models.TextChoices):
    MALE = "M", "Male"
    FEMALE = "F", "Female"
    


class Donors(models.Model):

    name = models.CharField(
        verbose_name="Name", 
        max_length=120, 
        blank=False, 
        null=False
    )

    dob = models.DateField(
        verbose_name="Date of Birth",
        auto_now_add=False,
        blank=False,
        null=False,
    )

    gender = models.CharField(
        verbose_name="Gender",
        max_length=1,
        choices=Gender.choices,
        blank=False,
        null=False,
        default=Gender.MALE
    )

    blood_group = models.CharField(
        verbose_name="Blood Group",
        max_length=3,
        choices=BloodGroup.choices,
        blank=False,
        null=False,
        default=BloodGroup.A_POSITIVE
    )

    address = models.CharField(
        verbose_name="Address", 
        max_length=500, 
        blank=True, 
        null=True
    )

    phone = models.CharField(
        verbose_name="Phone", 
        max_length=13, 
        blank=False,
        null=False
    )

    email = models.CharField(
        verbose_name="email", 
        max_length=80, 
        blank=False,
        null=False
    )

    diseases = models.CharField(
        verbose_name="Diseases", 
        max_length=1000, 
        blank=True, 
        null=True
    )

    def __str__(self):
        return "{}".format(self.name)
