
var boxText1;
var boxText2;
var boxText3;

var boxNum1;
var boxNum2;
var boxNum3;

var dialog;

var img1;
var img2;
var img3;

var count ;
var charas;

var NoImage = '/static/images/NoImage.png';

function imgDoubleclick(num) {
    var img;
    var imgNum;

    img1 = document.getElementById('img1');
    img2 = document.getElementById('img2');
    img3 = document.getElementById('img3');


    //javascriptに{%static %}はいらない
    //パスはstaticから書く
    if (num == 1) {
        img = '/static/images/character/man1.png';
        imgNum = "moji" + num;

    } else if (num == 2) {
        img = '/static/images/character/woman1.png';
        imgNum = "moji" + num;
    } else if (num == 3) {
        img = '/static/images/character/man2.png';
        imgNum = "moji" + num;
    } else if (num == 4) {
        img = '/static/images/character/woman2.png';
        imgNum = "moji" + num;
    } else if (num == 5) {
        img = '/static/images/character/man3.png';
        imgNum = "moji" + num;
    } else {
        img = '/static/images/character/woman3.png';
        imgNum = "moji" + num;
    }

    if (img1.src =="" || img1.src.indexOf(NoImage) > -1) {
        img1.src = img;
        boxNum1 = num;
        boxText1 = "moji" + num;

        document.getElementById(imgNum).innerHTML = "選択中";
        document.getElementById(imgNum).style.textAlign = "center";
        document.getElementById(num).disabled = true;
    } else if (img2.src == "" || img2.src.indexOf(NoImage) > -1) {
        img2.src = img;
        boxNum2 = num;
        boxText2 = "moji" + num;

        document.getElementById(imgNum).innerHTML = "選択中";
        document.getElementById(imgNum).style.textAlign = "center";
        document.getElementById(num).disabled = true;
    } else if (img3.src == "" || img3.src.indexOf(NoImage) > -1) {
        img3.src = img;
        boxNum3 = num;
        boxText3 = "moji" + num;

        document.getElementById(imgNum).innerHTML = "選択中";
        document.getElementById(imgNum).style.textAlign = "center";
        document.getElementById(num).disabled = true;
    } else {
        //何もしない
    }

    //選択中の画像についての処理を追加する

}

function boxDoubleclick(num) {

    if (num == 1) {
        img1.src = NoImage;
        document.getElementById(boxText1).innerHTML = "";
        document.getElementById(boxNum1).disabled = false;
        
    } else if (num == 2) {
        img2.src = NoImage;
        document.getElementById(boxText2).innerHTML = "";
        document.getElementById(boxNum2).disabled = false;

    } else {
        img3.src = NoImage;
        document.getElementById(boxText3).innerHTML = "";
        document.getElementById(boxNum3).disabled = false;

    }
}

function previous(){

    if( count < 0){
        count = charas.length-1;
    }else if(count > charas.length-1){
        count-=2;
    }
    document.getElementById('chara').src = charas[count];
    count--;
   
}

function next(){

    if( count > charas.length-1){
        count = 0;
    }else if( count < 0){
        count += 2;
    }
    document.getElementById('chara').src = charas[count];
    count++;   


}

function openDialog() {
    getCharas();
    if(charas.length==0){
        window.alert('面接官を１人以上選択してください。')
        dialog.removeAttribute('open');
    }
    //ダイアログに表示するキャラと人数・質問数
    document.getElementById('chara').src = charas[0];
    document.getElementById('ninzu').textContent = charas.length +"人";
    document.getElementById('toi').textContent = document.getElementById('question-su').value +"問";

    //次の画面へ送る質問数をセット
    document.inPersonform.situmonsu.value =  document.getElementById('question-su').value ;


    dialog = document.getElementById('dialog');
    dialog.setAttribute('open', '');


}

function closeDialog() {
    dialog.removeAttribute('open');
}

function startDialog() {
    document.inPersonform.chara.value = test ;
}

function getCharas(){
    count = 1;
    charas  = [];
    test.innerHTML="";

    var img1 = document.getElementById('img1');
    var img2 = document.getElementById('img2');
    var img3 = document.getElementById('img3');

    if(img1.getAttribute("src") != null && img1.getAttribute("src").indexOf(NoImage) == -1 ){
        charas.push(img1.src);
    }

    if(img2.getAttribute("src") != null && img2.getAttribute("src").indexOf(NoImage) == -1 ){
        charas.push(img2.src);
    }

    
    if(img3.getAttribute("src") != null  && img3.getAttribute("src").indexOf(NoImage) == -1 ){
        charas.push(img3.src);
    }

    //次の画面へ送るキャラ情報をセット
    document.inPersonform.chara.value = charas ;


}

//サンプルボイス
function sampleVoice(){
    var sampleVoice = new Audio("/static/audio/kisaragi_sample.wav");
    sampleVoice.play();
}