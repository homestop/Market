from rest_framework import serializers
from .models import Product, ProductImage, ProductImageList


class ProductImageListSerializers(serializers.ModelSerializer):
    class Meta:
        model = ProductImageList
        fields = (
            'name',
            'image'
        )


class ProductImageSerializers(serializers.ModelSerializer):
    list = ProductImageListSerializers()

    class Meta:
        model = ProductImage
        fields = (
            'name',
            'header',
            'list'
        )


class ProductSerializers(serializers.HyperlinkedModelSerializer):
    images = ProductImageSerializers()

    class Meta:
        model = Product
        fields = (
            'id',
            'name',
            'price',
            'category',
            'description',
            'in_stock',
            'images'
        )