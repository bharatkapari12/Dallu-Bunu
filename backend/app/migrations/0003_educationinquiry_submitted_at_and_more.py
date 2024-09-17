# Generated by Django 5.1.1 on 2024-09-17 11:24

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_remove_educationinquiry_submitted_at_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='educationinquiry',
            name='submitted_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='educationinquiry',
            name='ielts_score',
            field=models.DecimalField(blank=True, decimal_places=1, max_digits=4, null=True),
        ),
        migrations.AlterField(
            model_name='educationinquiry',
            name='toefl_score',
            field=models.DecimalField(blank=True, decimal_places=1, max_digits=4, null=True),
        ),
    ]