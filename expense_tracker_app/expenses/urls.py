from django.urls import path
from .views import add_expense, get_expenses

urlpatterns = [
    path('add_expense/', add_expense, name='add_expense'),
    path('get_expenses/', get_expenses, name='get_expenses'),
]