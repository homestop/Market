# Generated by Django 3.0.3 on 2020-03-24 21:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0005_auto_20200323_0705'),
    ]

    operations = [
        migrations.RenameField(
            model_name='productimage',
            old_name='product_image',
            new_name='header',
        ),
        migrations.RenameField(
            model_name='productimage',
            old_name='product_image_id',
            new_name='name',
        ),
    ]