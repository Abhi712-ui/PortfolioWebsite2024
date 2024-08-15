from django.urls import path
from .views import ProjectList, ExperienceList

urlpatterns = [
    path('projects/', ProjectList.as_view(), name='project-list'),
    path('experiences/', ExperienceList.as_view(), name='experience-list'),
]
