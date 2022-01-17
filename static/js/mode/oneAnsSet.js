function myCheck(){
    var flag = false;
    for(var i=0; i<document.form1.elements.length-1;i++){
        if(document.form1.elements[i].checked){
	    flag = true;
            alert(document.form1.elements[i].value + "が選択されました。");
        }
    }
    if(!flag){
	alert("項目が選択されていません。");
    }
}

 

function getRadioValue(name){
  //ラジオボタンオブジェクトを取得する
  var result;
  var radios = document.getElementsByName(name);
 
  //取得したラジオボタンオブジェクトから選択されたものを探し出す
  for(var i=0; i<radios.length; i++){
    if (radios[i].checked) {
      //選択されたラジオボタンのvalue値を取得する
      result = radios[i].value;
      break;
    }
  }
            if( confirm("質問内容:" + result + "\n"
            + "\n"
            + "上記内容で練習を開始します。よろしいですか？")){
                document.forms.form1.submit();
            } else {

            }
}

const element = document.querySelector('#quest');

element.addEventListener('change', handleChange);
function handleChange(event) {
    const questionValue = element.question.value;

    console.log('questionの値は' + questionValue + 'です');
}

console.log = function (log) {
    document.getElementById('console_log').innerHTML += log + "<br>";
}

function sample(str) {

    console.log('質問内容' + str);

}

//引数に値を渡す
sample();