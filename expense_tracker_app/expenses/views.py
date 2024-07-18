from django.http import JsonResponse

def add_expense(request):
    response_data = {
        "status": "success",
        "message": "Expense added successfully."
    }
    return JsonResponse(response_data)

def get_expenses(request):
    response_data = {
        "expenses": [
            {"id": 1, "amount": 50.0, "category": "Food", "description": "Lunch"},
            {"id": 2, "amount": 20.0, "category": "Transport", "description": "Bus fare"}
        ]
    }
    return JsonResponse(response_data)