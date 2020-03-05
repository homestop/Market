from django.db import models
from Market.apps.product.models import Product


class Order(models.Model):
    products = models.ManyToManyField(Product)
    firstLastName = models.CharField(max_length=150)
    email = models.EmailField(max_length=150)
    phone = models.CharField(max_length=14)
    shippingAddres = models.CharField(max_length=150)

    def __str__(self):
        return f'Order: {self.email}'
