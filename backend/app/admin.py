from django.contrib import admin
from .models import ContactMessage, EducationInquiry, EmploymentInquiry

# Register your models here.
admin.site.register(ContactMessage)
admin.site.register(EducationInquiry)
admin.site.register(EmploymentInquiry)
