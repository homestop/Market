from .models import Product, ProductImage, ProductImageList
from rest_framework import viewsets
from .serializers import ProductSerializers, ProductImageSerializers, ProductImageListSerializers


class ProductImageListViewSet(viewsets.ModelViewSet):
    queryset = ProductImageList.objects.all()
    serializer_class = ProductImageListSerializers


class ProductImageViewSet(viewsets.ModelViewSet):
    queryset = ProductImage.objects.all()
    serializer_class = ProductImageSerializers


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializers
