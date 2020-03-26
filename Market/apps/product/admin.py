from django.contrib import admin
from .models import Product, ProductImage, ProductImageList


admin.site.register(Product)
admin.site.register(ProductImage)

# TODO: fix doesn't work many to many
'''
    View TabularInline in django
'''
admin.site.register(ProductImageList)
