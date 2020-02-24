from rest_framework import serializers
from .models import Cart, CartItem


class CartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = (
            'item',
            'quantity'
        )


class CartSerializer(serializers.HyperlinkedModelSerializer):
    #items = serializers.PrimaryKeyRelatedField(queryset=CartItem.objects.all())
       
    class Meta:
        model = Cart
        fields = (
            'items',
            'shipping_address',
            'first_last_name',
            'phone',
            'mail',
            'id'
        )
