from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.utils import timezone

# Custom User Model (optional if you need custom user fields)
class CustomUser(AbstractUser):
    groups = models.ManyToManyField(
        Group,
        related_name='customuser_groups',
        blank=True,
        help_text='The groups this user belongs to.',
        verbose_name='groups',
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='customuser_user_permissions',
        blank=True,
        help_text='Specific permissions for this user.',
        verbose_name='user permissions',
    )

# Contact Us Model
class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)
    message = models.TextField()

    def __str__(self):
        return f'Message from {self.name}'

# Education Inquiry Model
class EducationInquiry(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    course_interested = models.CharField(max_length=100)
    ielts_score = models.DecimalField(max_digits=4, decimal_places=1, null=True, blank=True)
    toefl_score = models.DecimalField(max_digits=4, decimal_places=1, null=True, blank=True)

    def __str__(self):
        return f'Education Inquiry by {self.full_name}'

# Employment Inquiry Model
class EmploymentInquiry(models.Model):
    full_name = models.CharField(max_length=100)
    email = models.EmailField()
    skills = models.TextField()
    country = models.CharField(max_length=50)
    job_title = models.CharField(max_length=100)

    def __str__(self):
        return f'Employment Inquiry by {self.full_name}'
