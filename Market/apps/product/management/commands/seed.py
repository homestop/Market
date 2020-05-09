import os
from django.core.management.base import BaseCommand
from Market.apps.product.models import Product, ProductImage

CLEAR = 'clear'

NAMES = [
    'Video card',
    'Monitor',
    'Memory',
]
PRICES = [
    '150',
    '250',
    '40',
]
CATEGORIES = [
    'GPU',
    'Monitors',
    'RAM',
]
DESCRIPTIONS = [
    'Best choice for low price',
    'Best quality on the market',
    'Faster then memory X'
]

class Command(BaseCommand):
    help = "seed database for testing"

    def handle(self, *args, **options):
        self.stdout.write('seeding data ...')
        run_seed()
        self.stdout.write('done.')


def create_image(i):
    name = NAMES
    header = [
        'Videocard.jpg',
        'Monitor.jpg',
        'Memory.jpg',
    ]

    image = ProductImage(
        name=name[i],
        header=os.path.join('assets/') + header[i],
    )
    image.save()
    return image


def create_product(i):
    name = NAMES
    price = PRICES
    category = CATEGORIES
    description = DESCRIPTIONS
    in_stock = True

    product = Product(
        name=name[i],
        price=price[i],
        category=category[i],
        description=description[i],
        in_stock=in_stock
    )
    product.images = create_image(i)
    product.save()
    return product


def clear_data():
    Product.objects.all().delete()


def run_seed():
    clear_data()

    for i in range(len(NAMES)):
        create_product(i)
