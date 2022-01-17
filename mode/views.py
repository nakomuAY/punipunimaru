from django.shortcuts import render
from django.views import View

# Create your views here.
'''
def 名前(html内に記述する{% url ○○○ %}の部分)　(request): 
   return render(request,'(htmlのファイル名)')

'''

def mode(request): 
   return render(request,'mode/mode.html')

def practiceMode(request): 
   return render(request,'mode/practiceMode.html')

def oneAnsSet(request): 
   return render(request,'mode/oneAnsSet.html')

def oneAnsStart(request):
   
      params = {
          'question' : request.POST.get('question'),  
      }
      return render(request,'mode/oneAnsStart.html', params)
  


def oneAnsResult(request):

   params = {
      'resultTime' : request.POST['resultTime'],
      'resultText' : request.POST['resultText'],
      'question' : request.POST['question'],
   }
   
   return render(request,'mode/oneAnsResult.html', params)

def inPersonSet(request): 
   return render(request,'mode/inPersonSet.html')

def inPersonStart(request): 
   params = {
      'chara' : request.POST['chara[]'],
      'situmonsu' : request.POST['situmonsu'],
   }

   return render(request,'mode/inPersonStart.html',params)

def mensetuResult(request):
   params = {
      'resultTime' : request.POST['resultTime'],
      'resultChara' : request.POST['resultChara'],
      'resultQuestion' : request.POST['resultQuestion'],
      'resultMojiokoshi' : request.POST['resultMojiokoshi'],
   }

   return render(request,'mode/mensetuResult.html',params)

def productionStart(request): 
   return render(request,'mode/productionStart.html')

def productionAct(request):
   return render(request,'mode/productionAct.html')


def productionResult(request):
   params = {
      'resultTime' : request.POST['resultTime'],
      'resultChara' : request.POST['resultChara'],
      'resultQuestion' : request.POST['resultQuestion'],
      'resultMojiokoshi' : request.POST['resultMojiokoshi'],
   }

   return render(request,'mode/productionResult.html',params)



