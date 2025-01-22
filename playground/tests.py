from django.test import TestCase, Client
from django.urls import reverse
from .models import TodoItem


# Create your tests here.


class TodoItemViewTests(TestCase):
    def setUp(self):
        self.client = Client()

    def test_post_todo_item(self):
        url = reverse('post_todo_item')
        data = {'title': 'Test Todo Item'}
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, 200)

        # Check that the item was created in the database
        self.assertTrue(TodoItem.objects.filter(title='Test Todo Item').exists())

        # Check that the response contains the correct data
        self.assertEqual(response.json()['title'], 'Test Todo Item')