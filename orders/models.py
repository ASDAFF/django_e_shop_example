from django.db import models
from products.models import Product
from django.db.models.signals import post_save
from django.dispatch import receiver


class Status(models.Model):
    name = models.CharField(max_length=24, blank=True, null=True, default=None)
    is_active = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated = models.DateTimeField(auto_now_add=True, auto_now=False)

    def __str__(self):
        return "{}. {}".format(self.id, self.name)

    class Meta:
        verbose_name = "Статус заказа"
        verbose_name_plural = "Статусы заказа"

class Order(models.Model):
    total_price = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    customer_name = models.CharField(max_length=128, blank=True, null=True, default=None)
    customer_email = models.EmailField(blank=True, null=True, default=None)
    customer_phone = models.CharField(max_length=48, blank=True, null=True, default=None)
    comments = models.TextField(blank=True, null=True, default=None)
    status = models.ForeignKey(Status)
    created = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated = models.DateTimeField(auto_now_add=True, auto_now=False)

    def __str__(self):
        return "Заказ {} ({})".format(self.id, self.status.name)

    class Meta:
        verbose_name = "Заказ"
        verbose_name_plural = "Заказы"

    def get_count_total_price(self):
        all_products_in_order = ProductInOrder.objects.filter(order=self, is_active=True)

        order_total_price = 0
        for item in all_products_in_order:
            order_total_price += item.total_price

        return order_total_price

    def count_total_price_and_save(self):
        self.total_price = self.get_count_total_price()
        self.save(force_update=True)


class ProductInOrder(models.Model):
    order = models.ForeignKey(Order, blank=True, null=True, default=None)
    product = models.ForeignKey(Product, blank=True, null=True, default=None)
    nmb = models.IntegerField(default=1)
    price_per_item = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    total_price = models.DecimalField(max_digits=10, decimal_places=2, default=0)

    is_active = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated = models.DateTimeField(auto_now_add=True, auto_now=False)


    def __str__(self):
        return "{}".format(self.product.name)

    class Meta:
        verbose_name = "Товар"
        verbose_name_plural = "Товары"

    def save(self, *args, **kwargs):
        price_per_item = self.product.price
        self.price_per_item = price_per_item
        self.total_price = self.nmb * self.price_per_item
        super(ProductInOrder, self).save(args, kwargs)

        #count total price in order
        # self.order.count_total_price_and_save()

        # order = self.order
        # all_products_in_order = ProductInOrder.objects.filter(order=order, is_active=True)
        #
        # order_total_price = 0
        # for item in all_products_in_order:
        #     order_total_price += item.total_price
        #
        # self.order.total_price = order_total_price
        # self.order.save(force_update=True)



@receiver(post_save, sender=ProductInOrder)
def count_total_price_in_order(instance, **kwargs):
    order = instance.order
    order.count_total_price_and_save()
