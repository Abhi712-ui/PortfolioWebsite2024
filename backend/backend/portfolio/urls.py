from django.urls import path
from .views import ProjectList, ExperienceList, DescriptionList

urlpatterns = [
    path('projects/', ProjectList.as_view(), name='project-list'),
    path('experiences/', ExperienceList.as_view(), name='experience-list'),
    path('descriptions/', DescriptionList.as_view(), name='description-list'),
]
