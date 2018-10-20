from django.conf.urls import include, url
from .views import index,MFP,login,user_login
from MFP import views

# TEMPLATE URLS
app_name = 'MFP'


urlpatterns = [
                url(r'^$',MFP.as_view(),name="MFP"),
                
                
               ]