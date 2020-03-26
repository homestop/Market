from django.db import models
from os import path


def get_image_path(instance, filename):
    return path.join('assets', filename)


class ProductImageList(models.Model):
    name = models.CharField(max_length=25, primary_key=True)
    image = models.ImageField(upload_to=get_image_path, blank=True, null=True)

    def __str__(self):
        return f'{self.name}'


class ProductImage(models.Model):
    name = models.CharField(max_length=25, primary_key=True)
    header = models.ImageField(upload_to=get_image_path, blank=True, null=True)
    list = models.ManyToManyField(ProductImageList)

    def __str__(self):
        return f'{self.name}'


class Product(models.Model):
    name = models.CharField(max_length=150)
    price = models.IntegerField()
    category = models.CharField(max_length=50)
    description = models.CharField(max_length=600)
    in_stock = models.BooleanField()
    # TODO: create flexible image system
    '''
        if more then 10 images is not manageable
    '''
    images = models.ForeignKey(ProductImage, null=True, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.name}'
