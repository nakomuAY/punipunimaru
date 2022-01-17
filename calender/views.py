from django.shortcuts import render
from django.views import View
from .models import info_tbl
from datetime import datetime

# Create your views here.
'''
def 名前(html内に記述する{% url ○○○ %}の部分)　(request): 
   return render(request,'(htmlのファイル名)')

'''


def calender(request): 
   
   if request.method == 'POST':
      if 'input_ok' in request.POST:
         con_name = request.POST.get('input_con_name')

         input_con_day = request.POST.get('input_con_day')
         input_con_day = input_con_day.replace('年','').replace('月','').replace('日','')
         inter_date = datetime.strptime(input_con_day, '%Y%m%d')

         if request.POST.get('input_con_time') == '':
            inter_time = None
         else:
            inter_time = request.POST.get('input_con_time')
      
         con_place = request.POST.get('input_con_place')

         if request.POST.get('input_con_tel') == '':
            tel_number = None
         else:
            tel_number = int(request.POST.get('input_con_tel').replace('-',''))

         con_address = request.POST.get('input_con_email')

         note = request.POST.get('input_con_memo')

         color = request.POST.get('input_con_color')

         create_user = request.user

         input_info_tbl = info_tbl(con_name=con_name,inter_date = inter_date,inter_time=inter_time,
                        con_place=con_place,tel_number=tel_number,con_address=con_address,note=note,color=color,create_user=create_user)
         input_info_tbl.save()
      
      #DBから削除する
      elif 'delete_id' in request.POST:
         delete_id = request.POST.get('delete_id')
         info_tbl.objects.filter(id=delete_id).delete()

      #DBを編集する
      else :
         #POSTで受け取ったIDの取得、
         edit_id = request.POST.get('edit_id')
         #IDをもとにDBを検索し、変数に入れる
         edit_data = info_tbl.objects.get(id=edit_id)

         #DBをPOSTで受け取ったデータに書き換える
         edit_data.con_name = request.POST.get('edit_con_name')
         edit_con_day = request.POST.get('edit_con_day')
         edit_con_day = edit_con_day.replace('年','').replace('月','').replace('日','')
         edit_data.inter_date = datetime.strptime(edit_con_day, '%Y%m%d')

         if request.POST.get('edit_con_time') == '':
            edit_data.inter_time = None
         else:
            edit_data.inter_time = request.POST.get('edit_con_time')
      
         edit_data.con_place = request.POST.get('edit_con_place')

         if request.POST.get('edit_con_tel') == '':
            edit_data.tel_number = None
         else:
            edit_data.tel_number = int(request.POST.get('edit_con_tel').replace('-',''))

         edit_data.con_address = request.POST.get('edit_con_email')

         edit_data.note = request.POST.get('edit_con_memo')

         edit_data.color = request.POST.get('edit_con_color')

         #DBを更新する
         edit_data.save()

         print('printでエス')

   return render(request,'calender/calender.html')

   
def iframe(request): 
   if request.method =='POST':
       selectday = datetime.strptime(request.POST.get('selectday'), '%Y%m%d')
       con_data = info_tbl.objects.filter(inter_date = selectday,create_user = request.user)

       params ={
          'con_data' :con_data
       }
       
   else:
      params = {
         'con_data' : ""
      }


   return render(request,'calender/iframe.html',params)

def add(request): 
   
   return render(request,'calender/add.html')

def add_ck(request): 

   params = {
      'input_con_name' : request.POST['input_con_name'],
      'input_con_day' : request.POST['input_con_day'],
      'input_con_time' : request.POST['input_con_time'],
      'input_con_place' : request.POST['input_con_place'],
      'input_con_tel' : request.POST['input_con_tel'],
      'input_con_email' : request.POST['input_con_email'],
      'input_con_memo' : request.POST['input_con_memo'],
      'input_con_color' : request.POST['input_con_color'],
   }

   return render(request,'calender/add_ck.html',params)
   
def detail(request): 
   selectID = request.POST.get('ID')
   select_data = info_tbl.objects.filter(id = selectID)

   params ={
       'select_data' :select_data
   }

   return render(request,'calender/detail.html',params)