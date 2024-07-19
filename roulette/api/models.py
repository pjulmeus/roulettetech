from django.db import models

# Create your models here.

class Teacher(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15, blank=True)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

class Class(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(blank=True)
    teacher = models.ForeignKey(Teacher, on_delete=models.SET_NULL, null=True, related_name='classes')

    def __str__(self):
        return self.name

class Student(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(unique=True)
    date_of_birth = models.DateField()
    classes = models.ManyToManyField(Class, related_name='students')

    def __str__(self):
        return f'{self.first_name} {self.last_name}'
