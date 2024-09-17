# Generated by Django 5.1.1 on 2024-09-17 11:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='educationinquiry',
            name='submitted_at',
        ),
        migrations.AlterField(
            model_name='educationinquiry',
            name='ielts_score',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='educationinquiry',
            name='toefl_score',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]