from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path(r'admin/', admin.site.urls),
    path(r'api/', include('Market.apps.product.urls')),
    path(r'order/', include('Market.apps.order.urls'))
]
