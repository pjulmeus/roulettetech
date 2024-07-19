from django.urls import include,path
from rest_framework.routers import DefaultRouter
from .views import TeacherViewSet, ClassViewSet, StudentViewSet

router = DefaultRouter()
router.register(r'teachers', TeacherViewSet)
router.register(r'classes', ClassViewSet)
router.register(r'students', StudentViewSet)

urlpatterns = [
    path('', include(router.urls)),
]