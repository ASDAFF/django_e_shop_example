from django.shortcuts import render
from .forms import SubscriberForm
from products.models import Product

def landing(request):
    name = 'Pes'
    current_day = '03.12.2017'
    form = SubscriberForm(request.POST or None)
    if request.method=="POST" and form.is_valid():
        print(request.POST)
        data=form.cleaned_data
        new_form=form.save()

    return render(request, 'landing/landing.html', locals())


def home(request):
    products = Product.objects.filter(is_active=True).order_by('created')[:3]
    return render(request, 'landing/home.html', locals())