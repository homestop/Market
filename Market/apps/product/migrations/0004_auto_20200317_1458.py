# Generated by Django 3.0.3 on 2020-03-17 14:58

import Market.apps.product.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0003_auto_20200302_1235'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProductImage',
            fields=[
                ('product_image_id', models.CharField(max_length=25, primary_key=True, serialize=False)),
                ('product_image', models.ImageField(blank=True, null=True, upload_to=Market.apps.product.models.get_image_path)),
            ],
        ),
        migrations.AddField(
            model_name='product',
            name='images',
            field=models.ManyToManyField(to='product.ProductImage'),
        ),
    ]
