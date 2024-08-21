from django.urls import path
from .views import ProjectList, ExperienceList, DescriptionList, SkillList

urlpatterns = [
    path('projects/', ProjectList.as_view(), name='project-list'),
    path('experiences/', ExperienceList.as_view(), name='experience-list'),
    path('descriptions/', DescriptionList.as_view(), name='description-list'),
    path('skills/', SkillList.as_view(), name='skills-list')
]
