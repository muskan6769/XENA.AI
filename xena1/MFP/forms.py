from django import forms
from django.contrib.auth.models import User
from MFP.models import Auth

class UserForm(forms.ModelForm):
    password = forms.CharField(widget = forms.PasswordInput())

    class Meta():
        model = User
        fields = ('username','email','password')

class UserProfileInfo(forms.ModelForm):
    class Meta():
        model = Auth
        fields = ('ex_officio',)