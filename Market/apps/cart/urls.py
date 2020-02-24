from django.urls import include, path
from rest_framework import routers
from .views import CartViewSet, CartItemViewSet

router = routers.DefaultRouter()
router.register(r'cart', CartViewSet)
router.register(r'cart_item', CartItemViewSet)

urlpatterns = [
    path(r'', include(router.urls)),
]
