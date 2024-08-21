from django.contrib import admin
from .models import Project, Experience, Description, Skill

admin.site.register(Project)
admin.site.register(Experience)
admin.site.register(Description)
admin.site.register(Skill)

# Register your models here.
