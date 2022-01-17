from django.urls import path
from . import views


urlpatterns = [
    path('' , views.calender ,name='calender'),
    path('iframe/',views.iframe , name='iframe'),
    path('add/',views.add , name='add'),
    path('add_ck/',views.add_ck , name='add_ck'),
    path('detail/',views.detail ,name='detail'),
 
]
