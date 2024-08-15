from django.db import models

# Create your models here.

class Experience(models.Model):
    company = models.CharField(max_length=100)  # Name of the company
    role = models.CharField(max_length=100)  # Job title or role
    start_date = models.DateField()  # Start date
    end_date = models.DateField(blank=True, null=True)  # End date, nullable for current positions
    description = models.TextField()  # Detailed description of the role
    skills = models.CharField(max_length=200, blank=True, null=True)  # Skills or technologies used in this role
    is_current = models.BooleanField(default=False)  # Mark if this is the current position
    company_website = models.URLField(blank=True, null=True)  # Link to the company website

    def __str__(self):
        return f"{self.role} at {self.company}"

class Project(models.Model):
    title = models.CharField(max_length=100)  # The title of the project
    description = models.TextField()  # A brief description of the project
    image = models.ImageField(upload_to='projects/', blank=True, null=True)  # Thumbnail image for the project
    live_link = models.URLField(blank=True, null=True)  # Link to the live demo
    repo_link = models.URLField(blank=True, null=True)  # Link to the source code repository
    technologies = models.CharField(max_length=200, blank=True, null=True)  # Comma-separated list of technologies
    install_count = models.CharField(max_length=50, blank=True, null=True)  # Optional field for showing install count or similar metadata
    featured = models.BooleanField(default=False)  # Mark a project as featured on the homepage

    def __str__(self):
        return self.title
