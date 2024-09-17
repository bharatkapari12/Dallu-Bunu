from django.urls import path
from .import views

urlpatterns = [
    path('api/submit-contact/', views.submit_contact_form, name='submit-contact-form'),
    path('api/submit-education/', views.submit_education_inquiry, name='submit-education-inquiry'),
    path('api/submit-employment/', views.submit_employment_inquiry, name='submit-employment-inquiry'),
]
