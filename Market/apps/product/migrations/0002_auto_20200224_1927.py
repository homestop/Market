# Generated by Django 3.0.3 on 2020-02-24 19:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='id',
            field=models.PositiveIntegerField(primary_key=True, serialize=False, unique=True),
        ),
    ]
