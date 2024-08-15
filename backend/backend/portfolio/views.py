from django.shortcuts import render
from rest_framework import generics
from .models import Project, Experience
from .serializers import ProjectSerializer, ExperienceSerializer
# Create your views here.

from .models import Project, Experience
from .serializers import ProjectSerializer, ExperienceSerializer

class ProjectList(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ExperienceList(generics.ListAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer
