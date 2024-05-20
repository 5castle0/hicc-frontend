import json
from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt

# 임시 데이터 저장소
users = []


def register_page(request):
    return render(request, 'user/register.html')


def main_page(request):
    return render(request, 'user/main.html', {'users': users})


@csrf_exempt
def register(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body.decode('utf-8'))
            name = data.get("name")
            email = data.get("email")
            introduction = data.get("introduction")

            user = {
                'name': name,
                'email': email,
                'introduction': introduction
            }
            users.append(user)
            return redirect('/main_page')
        except json.JSONDecodeError as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)


def main(request):
    return JsonResponse(users, safe=False)