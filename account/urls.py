from django.urls import path
from . import views # importing views module from current folder

app_name = "account"

urlpatterns = [
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout')
]