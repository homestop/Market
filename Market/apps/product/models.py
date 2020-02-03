from django.db import models


class Product(models.Model):
    id = models.IntegerField(primary_key=True, unique=True)
    name = models.CharField(max_length=150)
    price = models.IntegerField()
    category = models.CharField(max_length=50)
    description = models.CharField(max_length=600)
    in_stock = models.BooleanField()
