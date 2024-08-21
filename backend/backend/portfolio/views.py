from django.shortcuts import render
from rest_framework import generics
from .models import Project, Experience, Description, Skill
from .serializers import ProjectSerializer, ExperienceSerializer, DescriptionSerializer, SkillSerializer


class ProjectList(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class ExperienceList(generics.ListAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer


class DescriptionList(generics.ListAPIView):
    queryset = Description.objects.all()
    serializer_class = DescriptionSerializer


class SkillList(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
