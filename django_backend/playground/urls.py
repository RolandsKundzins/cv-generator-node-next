from django.urls import path
from . import views


urlpatterns = [
    path('hello', views.say_hello),
    path('get_todo_items', views.get_todo_items),
    path('post_todo_item', views.post_todo_item, name='post_todo_item'),
]