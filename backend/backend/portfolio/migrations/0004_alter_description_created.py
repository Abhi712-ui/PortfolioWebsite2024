# Generated by Django 5.0.6 on 2024-08-16 20:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0003_alter_experience_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='description',
            name='created',
            field=models.DateField(help_text='Select the date this description was created.'),
        ),
    ]
