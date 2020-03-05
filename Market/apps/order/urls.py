from django.urls import path
from .views import order_list

urlpatterns = [
    path(r'', order_list),
]