from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.register_page, name='register_page'),
    path('main_page/', views.main_page, name='main_page'),
    path('register/', views.register, name='register'),
    path('main/', views.main, name='main'),
]