function edit(){
    var edit = document.getElementById('edit');
    if(edit.innerHTML == "編集"){
        document.getElementsByName("edit_con_name").item(0).readOnly = false;
        document.getElementsByName("edit_con_day").item(0).readOnly = false;
        document.getElementsByName("edit_con_time").item(0).readOnly = false;
        document.getElementsByName("edit_con_place").item(0).readOnly = false;
        document.getElementsByName("edit_con_tel").item(0).readOnly = false;
        document.getElementsByName("edit_con_email").item(0).readOnly = false;
        document.getElementsByName("edit_con_memo").item(0).readOnly = false;
        document.getElementsByName("edit_con_color").item(0).readOnly = false;
    
        //ボタンの位置をずらす
        document.getElementById('delete').style.display = "none";
        edit.innerHTML="編集する";
        edit.style.width = "130px";
        edit.style.marginLeft = "35%";
    }else if(edit.innerHTML =="編集する"){
        //ダイアログを取得する
        editDialog = document.getElementById('editDone');
        editDialog.setAttribute('open', '');
    }

}

function editDone(){
    document.edit_data.submit();
}

//ダイアログを取得する
dialog = document.getElementById('deleteCheck');

//ダイアログを開く
function deleteDialog(){
    dialog.setAttribute('open', '');
}

//ダイアログのOKが押された時の処理
function okDialog(){
    var okButton = document.getElementById('OK');
    var cancelButton= document.getElementById('cancel');

    if (okButton.innerHTML == "OK"){
        document.getElementById('msg').innerHTML="削除しました";
        cancelButton.style.display = "none";
        okButton.innerHTML = "戻る";
        okButton.style.width = "110px";
        okButton.style.marginLeft = "35%";
    }else if(okButton.innerHTML == "戻る"){
        document.delete_data.submit();
    }
}

//キャンセルボタンが押された時(ダイアログを閉じる)
function closeDialog(){
    dialog.removeAttribute('open');
}