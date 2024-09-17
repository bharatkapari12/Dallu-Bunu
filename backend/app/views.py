from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import ContactMessage, EducationInquiry, EmploymentInquiry
from .serializers import ContactMessageSerializer, EducationInquirySerializer, EmploymentInquirySerializer

# Create your views here.
# API for Contact Message
@api_view(['POST'])
def submit_contact_form(request):
    """
    API endpoint to handle contact form submissions from ReactJS frontend.
    """
    serializer = ContactMessageSerializer(data=request.data) 
    if serializer.is_valid(): 
        serializer.save()  
        return Response({"success": True, "message": "Form Submitted Successfully"}, status=201)
    return Response({"success": False, "message": "Invalid data"}, status=400)

# API for Education Inquiry
@api_view(['POST'])
def submit_education_inquiry(request):
    serializer = EducationInquirySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"success": True, "message": "Education Inquiry Submitted Successfully"}, status=201)
    else:
        return Response({"success": False, "errors": serializer.errors, "message": "Invalid data"}, status=400)

# API for Employment Inquiry
@api_view(['POST'])
def submit_employment_inquiry(request):
    serializer = EmploymentInquirySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"success": True, "message": "Employment Inquiry Submitted Successfully"}, status=201)
    return Response({"success": False, "message": "Invalid data"}, status=400)