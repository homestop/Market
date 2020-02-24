from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=150)
    price = models.IntegerField()
    category = models.CharField(max_length=50)
    description = models.CharField(max_length=600)
    in_stock = models.BooleanField()

    def __str__(self):
        return f'{self.name}'
