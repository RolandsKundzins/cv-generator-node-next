from django.shortcuts import render
from django.http import HttpResponseBadRequest, JsonResponse
from .models import TodoItem
# Create your views here.

def say_hello(request):
  # return HttpResponse('Hello World!')
  return render(request, 'hello.html')



def get_todo_items(request):
    todo_items = TodoItem.objects.all()
    return JsonResponse(list(todo_items), safe=False)


def post_todo_item(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        if not title:
            return HttpResponseBadRequest('Title is required')

        new_item = TodoItem(title=title)
        new_item.save()
        return JsonResponse({'id': new_item.id, 'title': new_item.title})
    else:
        return HttpResponseBadRequest('Invalid request method')
