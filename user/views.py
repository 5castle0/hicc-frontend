import json
from django.http import JsonResponse
from django.shortcuts import render, redirect

# 임시 데이터 저장소
users = []


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
            return redirect('main')
        except json.JSONDecodeError as e:
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)
    return render(request, 'user/register.html')


def main(request):
    if request.method == 'POST':
        return JsonResponse(users, safe=False)
    return render(request, 'user/main.html', {'users': users})
