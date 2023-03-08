from django.urls import path
from . import views # importing views module from current folder

app_name = "home_page"

urlpatterns = [
    path('', views.home, name='home'),
    path('status/', views.status, name='status')
]