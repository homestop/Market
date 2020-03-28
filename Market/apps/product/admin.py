from django.contrib import admin
from .models import Product, ProductImage, ProductImageList


class ProductImageListAdmin(admin.TabularInline):
    model = ProductImage.list.through


class ProductImageAdmin(admin.ModelAdmin):
    inlines = [ProductImageListAdmin]


admin.site.register(Product)
admin.site.register(ProductImage, ProductImageAdmin)
# TODO: fix doesn't work many to many
'''
    View TabularInline in django
'''
admin.site.register(ProductImageList)
