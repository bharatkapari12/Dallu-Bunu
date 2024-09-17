from rest_framework import serializers
from .models import ContactMessage, EducationInquiry, EmploymentInquiry

# Serializer for ContactMessage model
class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['name', 'phone_number', 'message']

# Serializer for EducationInquiry model
class EducationInquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = EducationInquiry
        fields = ['id', 'full_name', 'email', 'course_interested', 'ielts_score', 'toefl_score', 'submitted_at']

# Serializer for EmploymentInquiry model
class EmploymentInquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = EmploymentInquiry
        fields = ['id', 'full_name', 'email', 'skills', 'country', 'job_title', 'submitted_at']
