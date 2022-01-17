"""ProccessProject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.urls import path,include
from django.views.generic.base import TemplateView 
from app import views  



urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/',include('django.contrib.auth.urls')), #デフォルト認証機能
    path('',include('home.urls'), name='home'),  #ホーム画面
    path('create_account', views.SignUpView.as_view(), name='create_account') , #アカウント登録画面
    path('mode/',include('mode.urls'),name = 'mode'), #モード選択関連の画面
    path('calender/',include('calender.urls'),name = 'calender') #面接日登録画面
]
