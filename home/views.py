from django.shortcuts import render
from django.views import View
from calender.models import info_tbl
import datetime
from django.contrib.auth.decorators import login_required

# Create your views here.
'''
def 名前(html内に記述する{% url ○○○ %}の部分)　(request): 
   return render(request,'(htmlのファイル名)')

'''

@login_required

def home(request):
    #DBから会社名を取得する
    con_names = info_tbl.objects.values_list('con_name', flat=True).filter(create_user = request.user)
    #DBから面接日を取得する
    inter_dates = info_tbl.objects.values_list('inter_date', flat=True).filter(create_user = request.user)
    
    #今日の日付
    today = datetime.date.today()

    #htmlに送るデータをいれる配列
    post_data = {} 

    #index→添え字
    for index in range(len(inter_dates)):
        #残り日数を求める
        nokori = inter_dates[index]-today
        #残り日数が0日以上だったら配列に会社名と残り日数を追加する
        if nokori.days >= 0:
            post_data[con_names[index]] = str(nokori.days)
            print(post_data)
    params = {
        'post_data':post_data
    }

    return render(request,'home.html',params)