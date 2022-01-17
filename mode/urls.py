from django.urls import path
from . import views


urlpatterns = [
    path('' , views.mode ,name='mode'),
    path('practiceMode/' , views.practiceMode ,name='practiceMode'),
    path('oneAnsStart/' , views.oneAnsStart ,name='oneAnsStart'),
    path('oneAnsSet/' , views.oneAnsSet ,name='oneAnsSet'),
    path('oneAnsResult/' , views.oneAnsResult ,name='oneAnsResult'),
    path('inPersonSet/' , views.inPersonSet ,name='inPersonSet'),
    path('inPersonStart/' , views.inPersonStart ,name='inPersonStart'),
    path('productionStart/' , views.productionStart ,name='productionStart'),
    path('productionAct/' , views.productionAct ,name='productionAct'),
    path('mensetuResult/' , views.mensetuResult ,name='mensetuResult'),
    path('productionResult/' , views.productionResult ,name='productionResult'),
    
]


