from django.urls import path
from . import views


urlpatterns = [
    # /todos/
    path('', views.todo_list_create),
    # /todos/1/
    path('<int:todo_pk>/', views.todo_update_delete),
]