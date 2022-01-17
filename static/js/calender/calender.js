/* 年を取得(1970年から2200年まで) */
function generate_year_range(start, end) {
    var years = "";
    for (var year = start; year <= end; year++) {
        years += "<option value='" + year + "'>" + year + "</option>";
    }
    return years;
}

var today = new Date();   // 本日の日付を取得
var currentMonth = today.getMonth();   // 月を0～11の整数で取得
var currentYear = today.getFullYear();   // 年を4桁の整数で取得
var selectYear = document.getElementById("year");   // 日付指定の年の保持
var selectMonth = document.getElementById("month");   // 日付指定の月の保持


var createYear = generate_year_range(1970, 2200);  //generate_year_range関数に代入し、戻り値を取得

document.getElementById("year").innerHTML = createYear;   // idプロパティのyearにcreateYearの値を上書き

var calender = document.getElementById("calender");   // カレンダーのtableのデータを保持
var lang = calender.getAttribute('data-lang');   // 変数calenderの属性の値を代入

/* 月（英語） */
var months = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
/* 曜日(英語) */
var days = ["日曜日", "月曜日" ,"火曜日", "水曜日", "木曜日", "金曜日", "土曜日"];

/* tableの1行目に曜日を追加表示*/
var dayHeader = "<tr>";
for (day in days) {
    dayHeader += "<th data-days='" + days[day] + "'>" + days[day] + "</th>";
}
dayHeader += "</tr>";

document.getElementById("thead-month").innerHTML = dayHeader;   // idプロパティのthead-monthにdayHeaderの曜日を上書き

monthAndYear = document.getElementById("monthAndYear");   // カレンダーのtable上部の月、年のデータを保持
showCalender(currentMonth, currentYear);   // showCalender関数に引数を渡す

/* 翌月に移動する為に現時点で表示している月の次の月を引数としてshowCalender関数に引き渡す */
function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalender(currentMonth, currentYear);
}

/* 前月に移動する為に現時点で表示している月の前の月を引数としてshowCalender関数に引き渡す */
function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalender(currentMonth, currentYear);
}

/* 移動する月、年を指定し、月、年を引数としてshowCalender関数に引き渡す */
function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalender(currentMonth, currentYear);
}
/* カレンダー作成*/
function showCalender(month, year) {

    var firstDay = (new Date(year, month)).getDay();   // 受け取った引数の曜日の値を0~6の整数で取得

       // カレンダーの日付データの保持
    var tbl = document.getElementById("calender-body");
    tbl.innerHTML = "";   // idプロパティのcalender-bodyを保持するtblにnullで上書き

    monthAndYear.innerHTML = months[month] + " " + year;   // カレンダーの月、年に受け取った引数で上書き
    selectYear.value = year;   // 日付指定の月のプルダウンメニューに引数の年を表示
    selectMonth.value = month;   // 日付指定の年のプルダウンメニューに引数の月を表示

    
    var date = 1;
    for (var i = 0; i < 6; i++) {
        var row = document.createElement("tr");   
        for (var j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                cell = document.createElement("td");
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);    
                
            } else if (date > daysInMonth(month, year)) {   // 引数をdaysInMonth関数に渡し、戻り値がdataより小さい場合
                break;
            } else {
                cell = document.createElement("td");   // 子要素として横一列に追加できるようにする
                cell.setAttribute("data-date", date);   // 子要素として日付の属性を追加
                cell.setAttribute("data-month", month + 1);   // 子要素として月の属性を追加
                cell.setAttribute("data-year", year);   // 子要素として年の属性を追加
                cell.setAttribute("data-month_name", months[month]);   // 子要素として指定する月(英語)の属性を追加
                cell.className = "date-picker";   // 土、日の場合、指定の色にする
                cell.innerHTML = "<span>" + date + "</span>";   // 日付を強調して上書き(日付入力)
                    
                /* 現時点で表示している年月日が本日であるかを比較*/
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.className = "date-picker selected";   // 本日である場合赤く表示
                }
                row.appendChild(cell); 
                date++;   //        
            }       
        }        
        tbl.appendChild(row);    
    }  
    
}   

/* 引数の月、年の32番目の日付を受け取り32から引く*/
function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();   
}

//今日の日付とクリックされた日が同じとき、色はどうする！


var lastSelect = "";   // 前回押した場所 

function select(){ 
    calenderbody = document.getElementById("calender");
    var selectYear = document.getElementById("monthAndYear").innerHTML.substr(-4,4); //選択された年
    var selectMonth = document.getElementById("monthAndYear").innerHTML.substr(0,document.getElementById("monthAndYear").innerHTML.indexOf("月")); //選択された月
    if(selectMonth.length = 1){
        selectMonth = "0"+selectMonth;
    }
    for(var i = 1; i < calender.rows.length; i++ ){
        for(var j =0;j < calender.rows[i].cells.length;j++){
            var cell=calenderbody.rows[i].cells[j];
            cell.addEventListener('click',function(){
                //クリックされた日付を取得し代入
                document.getElementById("selectday").value = selectYear + selectMonth + this.innerText
                //クリックされた日付を表示する
                document.getElementById("day").innerText = selectYear +"年"+ selectMonth +"月"+ this.innerText+"日";
                //クリックされた日付を表示する
                document.getElementById("input_con_day").value = selectYear +"年"+ selectMonth +"月"+ this.innerText+"日";
                Sitei(this); 
                detailField(this);
                document.day_send.submit();
            
            });     
        }
    }
}

function Sitei(Cell){  
    var today = new Date();   // 本日の日付を取得
    if(lastSelect != ""){
        if (lastSelect.innerHTML === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
            cell.className = "date-picker selected";   // 本日である場合赤く表示
        }else{
            lastSelect.className="date-picker";
        }    
    }  
        Cell.className="date-picker clicked";//クリックした場所を水色に変更する
        lastSelect=Cell;
}

function detailField(){
    var detailField = document.getElementById("detailField");
    detailField.style.visibility = "visible";
}

function openDialog() {
    var opacityField = document.getElementById("opacityField");
    opacityField.style.opacity ="0.3";
    dialog = document.getElementById('input_dialog');
    dialog.setAttribute('open', '');
}

function closeDialog() {
    dialog.removeAttribute('open');
}
