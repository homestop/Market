from django.db import models
from Market.apps.product.models import Product


class CartItem(models.Model):
    item = models.ForeignKey(Product, models.CASCADE)
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return f"{self.quantity} of {self.item.name}"

    def get_total_item_price(self):
        return self.quantity * self.item.price


class Cart(models.Model):
    items = models.ManyToManyField(CartItem)

    shipping_address = models.CharField(max_length=100);
    first_last_name = models.CharField(max_length=50);
    phone = models.CharField(max_length=11);
    mail = models.CharField(max_length=50);

    def get_total(self):
        total = 0
        for item in self.items.all():
            total += item.get_total_item_price()

        return total
