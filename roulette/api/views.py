from .serializer import TeacherSerializer, ClassSerializer, StudentSerializer
from rest_framework import viewsets
from django.shortcuts import render
from django.http import HttpResponse
from .models import Teacher, Class, Student



# Create your views here.

class TeacherViewSet(viewsets.ModelViewSet):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer

class ClassViewSet(viewsets.ModelViewSet):
    queryset = Class.objects.all()
    serializer_class = ClassSerializer

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer