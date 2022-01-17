var info_tbl = document.getElementById("info_tbl");
for (var i = 0;i<info_tbl.rows.length;i++){
    document.getElementById("info_tbl").rows[i].cells[0].style.borderColor = document.getElementsByClassName("colors")[i].value;
}

function con_info_detail(row){
    var ROW = row.parentNode.rowIndex;
    parent.document.getElementById("detail_ID").value=document.getElementsByClassName("IDs")[ROW].value;
    parent.document.detail_send.submit()
}
    
    