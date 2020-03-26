from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from django.conf import settings
from django.views.static import serve


urlpatterns = [
    path(r'admin/', admin.site.urls),
    path(r'api/', include('Market.apps.product.urls')),
    path(r'order/', include('Market.apps.order.urls')),


    url(r'api/product/assets/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT})
]
