from django.contrib import admin
from django.urls import path, include
from .views import index, getToken

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", index, name="index"),
    path("", include("base.urls")),
]
