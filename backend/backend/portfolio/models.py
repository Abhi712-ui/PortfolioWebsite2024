from django.db import models

# Create your models here.

MONTH_CHOICES = [
    ('01', 'January'),
    ('02', 'February'),
    ('03', 'March'),
    ('04', 'April'),
    ('05', 'May'),
    ('06', 'June'),
    ('07', 'July'),
    ('08', 'August'),
    ('09', 'September'),
    ('10', 'October'),
    ('11', 'November'),
    ('12', 'December'),
]


class Experience(models.Model):
    company = models.CharField(max_length=100)  # Name of the company
    role = models.CharField(max_length=100)  # Job title or role
    start_month = models.CharField(max_length=2, choices=MONTH_CHOICES, blank=True, null=True)  # Start month
    start_year = models.IntegerField(blank=True, null=True)  # Start year
    end_month = models.CharField(max_length=2, choices=MONTH_CHOICES, blank=True, null=True)
    end_year = models.IntegerField(blank=True, null=True)  # End year, nullable for current positions
    description = models.TextField(default=' ')  # Detailed description of the role
    skills = models.CharField(max_length=200, blank=True, null=True)  # Skills or technologies used in this role
    is_current = models.BooleanField(default=False)  # Mark if this is the current position
    company_website = models.URLField(blank=True, null=True)  # Link to the company website

    def __str__(self):
        return f"{self.role} - {self.company}"

    def get_start_date_display(self):
        return f"{self.get_start_month_display()} {self.start_year}" \
            if self.start_month and self.start_year else "Start Date Not Set"

    def get_end_date_display(self):
        if self.is_current or not self.end_month or not self.end_year:
            return "Present"
        return f"{self.get_end_month_display()} {self.end_year}"


class Project(models.Model):
    title = models.CharField(max_length=100)  # The title of the project
    description = models.TextField()  # A brief description of the project
    image = models.ImageField(upload_to='projects/', blank=True, null=True)  # Thumbnail image for the project
    live_link = models.URLField(blank=True, null=True)  # Link to the live demo
    repo_link = models.URLField(blank=True, null=True)  # Link to the source code repository
    technologies = models.CharField(max_length=200, blank=True, null=True)  # Comma-separated list of technologies
    featured = models.BooleanField(default=False)  # Mark a project as featured on the homepage
    start_month = models.CharField(max_length=2, choices=MONTH_CHOICES, blank=True, null=True)  # Start month
    start_year = models.IntegerField(blank=True, null=True)  # Start year

    def __str__(self):
        return self.title

    def get_start_date_display(self):
        return f"{self.get_start_month_display()} {self.start_year}" \
            if self.start_month and self.start_year else "Start Date Not Set"


class Description(models.Model):
    description = models.TextField(help_text="Enter the description here. Multiple paragraphs are allowed.")
    is_active = models.BooleanField(default=False, help_text="Is this description active?")
    created = models.DateField(help_text="Select the date this description was created.")

    def __str__(self):
        return self.description
