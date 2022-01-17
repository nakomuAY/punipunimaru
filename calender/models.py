from django.db import models

# Create your models here.

class info_tbl(models.Model):							
    con_name = models.CharField(max_length=255,null=False,blank=False)							
    inter_date = models.DateField(null=False,blank=False,default="0000-0000-000")						
    inter_time = models.TimeField(null=True,blank=True)								
    con_place = models.CharField(max_length=255,null=False,blank=True)							
    tel_number = models.IntegerField(null=True,blank=True)								
    con_address	= models.CharField(max_length=255,null=False,blank=True)							
    color = models.CharField(max_length=7,null=False,blank=False,default="#4682b4")						
    note = models.CharField(max_length=255,null=False,blank=True)
    create_user = models.CharField(max_length=150, blank=False) #登録したユーザー名

    def __str_(self):
        return self.con_number						

