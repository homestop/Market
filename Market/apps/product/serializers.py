from rest_framework import serializers
from .models import Product


class ProductSerializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = (
            'id',
            'name',
            'price',
            'category',
            'description',
            'in_stock'
        )