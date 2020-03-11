from django.core.management.base import BaseCommand
from Market.apps.product.models import Product

CLEAR = 'clear'


class Command(BaseCommand):
    help = "seed database for testing"

    def handle(self, *args, **options):
        self.stdout.write('seeding data ...')
        run_seed()
        self.stdout.write('done.')


def create_product(i):
    name = ['1', '2', '3', '4', '5']
    price =  ['1', '2', '3', '4', '5']
    category = ['1', '2', '3', '4', '5']
    description = ['1', '2', '3', '4', '5']
    in_stock = True

    product = Product(
        name=name[i],
        price=price[i],
        category=category[i],
        description=description[i],
        in_stock=in_stock
    )
    product.save()
    return product


def clear_data():
    Product.objects.all().delete()


def run_seed():
    clear_data()

    for i in range(4):
        create_product(i)
