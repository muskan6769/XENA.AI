# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.urls import reverse
from django.views.generic import TemplateView
from MFP.forms import UserForm,UserProfileInfo
from django.contrib.auth import logout
from django.contrib.auth import authenticate, login as dj_login
from django.http import HttpResponseRedirect,HttpResponse
from django.contrib.auth.decorators import login_required



# Create your views here.
def index(request):
    return render(request,'index.html')

@login_required
def special(request):
    return HttpResponse("you are logged in, nice")

@login_required
def user_logout(request):
    logout(request)
    return HttpResponseRedirect(reverse('index'))

class MFP(TemplateView):
    template_name = "MFP.html"

def login(request):
    return render(request,'login.html')

def register(request):
    registered = False

    if request.method == "POST":
        user_form = UserForm(data=request.POST)
        profile_form = UserProfileInfo(data=request.POST)

        if user_form.is_valid() and profile_form.is_valid():

            user = user_form.save()
            user.set_password(user.password)
            user.save()

            profile = profile_form.save(commit=False)
            profile.user = user

            profile.save()

            registered = True
        else:
            print(user_form.errors,profile_form.errors)
    else:
        user_form = UserForm()
        profile_form = UserProfileInfo()

    return render(request,'register.html',
                            {'registered':registered,
                            'user_form':user_form,
                            'profile_form':profile_form})

def user_login(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(username=username, password=password)

        if user:
            if user.is_active:
                dj_login(request,user)
                return HttpResponseRedirect(reverse('index_mess'))

            else:
                return HttpResponse("acoount not active!")
        else:
            print("someone tried to login and failed!")
            #print("Username: {} and password {}").format(username,password)
            return HttpResponse("invalid login details supplied!")
    else:
        return render(request,'login.html',{})


def mess_service(request):
    return render(request,'index_mess.html')

