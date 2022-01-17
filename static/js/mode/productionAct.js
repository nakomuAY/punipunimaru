//面接官キャラの画像パスが入っている配列
var charasArray =[
  "/static/images/character/man1.png",
  "/static/images/character/man2.png",
  "/static/images/character/man3.png",
  "/static/images/character/woman1.png",
  "/static/images/character/woman2.png",
  "/static/images/character/woman3.png",
];

var questionArray = new Array;

var woman1 = [
  //自己紹介について
  "/static/audio/woman1/question1.wav",
  "/static/audio/woman1/question2.wav",
  "/static/audio/woman1/question3.wav",
  "/static/audio/woman1/question4.wav",
  "/static/audio/woman1/question5.wav",
  "/static/audio/woman1/question6.wav",
  "/static/audio/woman1/question7.wav",
  "/static/audio/woman1/question8.wav",
  "/static/audio/woman1/question9.wav",
  "/static/audio/woman1/question10.wav",
];

var man1 =[
    //自己紹介について
    "/static/audio/man1/question1.wav",
    "/static/audio/man1/question2.wav",
    "/static/audio/man1/question3.wav",
    "/static/audio/man1/question4.wav",
    "/static/audio/man1/question5.wav",
    "/static/audio/man1/question6.wav",
    "/static/audio/man1/question7.wav",
    "/static/audio/man1/question8.wav",
    "/static/audio/man1/question9.wav",
    "/static/audio/man1/question10.wav",

  //志望動機について
  "/static/audio/man1/question11.wav",
  "/static/audio/man1/question12.wav",
  "/static/audio/man1/question13.wav",
  "/static/audio/man1/question14.wav",
  "/static/audio/man1/question15.wav",

  //自己評価について
  "/static/audio/man1/question28.wav",
  "/static/audio/man1/question29.wav",
  "/static/audio/man1/question30.wav",
  "/static/audio/man1/question31.wav",
  "/static/audio/man1/question32.wav",
  "/static/audio/man1/question33.wav",
];

var woman2 = [
    //自己紹介について
    "/static/audio/woman2/question1.wav",
    "/static/audio/woman2/question2.wav",
    "/static/audio/woman2/question3.wav",
    "/static/audio/woman2/question4.wav",
    "/static/audio/woman2/question5.wav",
    "/static/audio/woman2/question6.wav",
    "/static/audio/woman2/question7.wav",
    "/static/audio/woman2/question8.wav",
    "/static/audio/woman2/question9.wav",
    "/static/audio/woman2/question10.wav",

  //経験談について
  "/static/audio/woman2/question16.wav",
  "/static/audio/woman2/question17.wav",
  "/static/audio/woman2/question18.wav",
  "/static/audio/woman2/question19.wav",
  "/static/audio/woman2/question20.wav",
  "/static/audio/woman2/question21.wav",
  "/static/audio/woman2/question22.wav",
  "/static/audio/woman2/question23.wav",
  "/static/audio/woman2/question24.wav",
  "/static/audio/woman2/question25.wav",
  "/static/audio/woman2/question26.wav",
  "/static/audio/woman2/question27.wav",
];

var man2 = [
  //自己紹介について
  "/static/audio/man2/question1.wav",
  "/static/audio/man2/question2.wav",
  "/static/audio/man2/question3.wav",
  "/static/audio/man2/question4.wav",
  "/static/audio/man2/question5.wav",
  "/static/audio/man2/question6.wav",
  "/static/audio/man2/question7.wav",
  "/static/audio/man2/question8.wav",
  "/static/audio/man2/question9.wav",
  "/static/audio/man2/question10.wav",

  //目標"キャリアプランについて"
  "/static/audio/man2/question34.wav",
  "/static/audio/man2/question35.wav",
  "/static/audio/man2/question36.wav",
  "/static/audio/man2/question37.wav",
  "/static/audio/man2/question38.wav",
  "/static/audio/man2/question39.wav",
  "/static/audio/man2/question40.wav",
  "/static/audio/man2/question41.wav",
  "/static/audio/man2/question42.wav",
  "/static/audio/man2/question43.wav",
];

var woman3 = [
    //自己紹介について
    "/static/audio/woman3/question1.wav",
    "/static/audio/woman3/question2.wav",
    "/static/audio/woman3/question3.wav",
    "/static/audio/woman3/question4.wav",
    "/static/audio/woman3/question5.wav",
    "/static/audio/woman3/question6.wav",
    "/static/audio/woman3/question7.wav",
    "/static/audio/woman3/question8.wav",
    "/static/audio/woman3/question9.wav",
    "/static/audio/woman3/question10.wav",

  //勤務条件について
  "/static/audio/woman3/question44.wav",
  "/static/audio/woman3/question45.wav",
  "/static/audio/woman3/question46.wav",
  "/static/audio/woman3/question47.wav",

  //答えにくい"困りやすい質問"
  "/static/audio/woman3/question48.wav",
  "/static/audio/woman3/question49.wav",
  "/static/audio/woman3/question50.wav",
  "/static/audio/woman3/question51.wav",
  "/static/audio/woman3/question52.wav",
  "/static/audio/woman3/question53.wav",
  "/static/audio/woman3/question54.wav",
  "/static/audio/woman3/question55.wav",
  "/static/audio/woman3/question56.wav",
];

var man3 = [
  //自己紹介について
  "/static/audio/man3/question1.wav",
  "/static/audio/man3/question2.wav",
  "/static/audio/man3/question3.wav",
  "/static/audio/man3/question4.wav",
  "/static/audio/man3/question5.wav",
  "/static/audio/man3/question6.wav",
  "/static/audio/man3/question7.wav",
  "/static/audio/man3/question8.wav",
  "/static/audio/man3/question9.wav",
  "/static/audio/man3/question10.wav",

  

];


//面接開始の音声
var startVoiceArray = [];
//面接終了の音声
var endVoiceArray = [];

//逆質問の音声
var lastQuestionArray = [];

//ランダムに選ばれた質問を入れる変数
var selectText;

//キャラ数をランダムに決める(1~3)
var su = Math.floor(Math.random() * 3)+1;


//ランダムに選ばれたキャラが入る変数
var selectChara;

//選ばれたキャラが入る配列(配列数はランダムに決定したキャラ数(su))
var selectCharas = [];

//はじめとおわりの挨拶をするキャラを決めるランダムな数字
var rndNum = Math.floor(Math.random() * su);


//面接官をランダムに決定する
for (var i = 0; i<su;i++){
  while(true){
      selectChara= charasArray[Math.floor(Math.random() * charasArray.length)];
      //配列の中にすでに同じキャラがいないかの判定
      if(!selectCharas.includes(selectChara)){
          //選ばれたキャラを配列にいれる
          selectCharas.push(selectChara);
          break;
      }
  }
}
//次の画面に渡す面接官のキャラをセットする
document.getElementById("resultChara").value= selectCharas;

//質問数をランダムに決める(1~10)
var situmonsu = Math.floor(Math.random() * 10)+1;

const Css=document.getElementById('css');

//ランダムに選ばれた質問を入れる変数
var selectText;

//選ばれた質問が入る配列(配列数は前の画面で選択された質問数)
selectQuestions = [];

    //面接官の数によってcssを変更する
    switch(su){
      case 1:
        Css.innerHTML="<link rel=\"stylesheet\"  href=/static/css/mode/inPersonStart1.css>";
        document.getElementById('aicon1').src =selectCharas[0];
      break;

      case 2:
        Css.innerHTML="<link rel=\"stylesheet\"  href=/static/css/mode/inPersonStart2.css>";
        document.getElementById('aicon1').src =selectCharas[0];
        document.getElementById('aicon2').src =selectCharas[1];
      break;
      
      case 3:
        Css.innerHTML="<link rel=\"stylesheet\"  href=/static/css/mode/inPersonStart3.css>";
        document.getElementById('aicon1').src =selectCharas[0];
        document.getElementById('aicon2').src =selectCharas[1];
        document.getElementById('aicon3').src =selectCharas[2];
      break;
    } 
    
    for (var i=0;i < selectCharas.length;i++){
      var chara = selectCharas[i].substr(selectCharas[i].lastIndexOf("/")+1);
      switch(chara){
        case "man1.png" :
          questionArray = questionArray.concat(man1);
          startVoiceArray[i] = "/static/audio/man1/start.wav";
          endVoiceArray[i] = "/static/audio/man1/end.wav";
          lastQuestionArray[i] = "/static/audio/man1/lastQuestion.wav";
          break;
    
        case "man2.png" :
          questionArray = questionArray.concat(man2);
          startVoiceArray[i] = "/static/audio/man2/start.wav";
          endVoiceArray[i] = "/static/audio/man2/end.wav";
          lastQuestionArray[i] = "/static/audio/man2/lastQuestion.wav";
          break;
    
        case "man3.png" :
          questionArray = questionArray.concat(man3);
          startVoiceArray[i] = "/static/audio/man3/start.wav";
          endVoiceArray[i] = "/static/audio/man3/end.wav";
          lastQuestionArray[i] = "/static/audio/man3/lastQuestion.wav";
          break;
        case "woman1.png" :
          questionArray = questionArray.concat(woman1);
          startVoiceArray[i] = "/static/audio/woman1/start.wav";
          endVoiceArray[i] = "/static/audio/woman1/end.wav";
          lastQuestionArray[i] = "/static/audio/woman1/lastQuestion.wav";
          break;
        case "woman2.png" :
          questionArray = questionArray.concat(woman2);
          startVoiceArray[i] = "/static/audio/woman2/start.wav";
          endVoiceArray[i] = "/static/audio/woman2/end.wav";
          lastQuestionArray[i] = "/static/audio/woman2/lastQuestion.wav";
          break;
        case "woman3.png" :
          questionArray = questionArray.concat(woman3);
          startVoiceArray[i] = "/static/audio/woman3/start.wav";
          endVoiceArray[i] = "/static/audio/woman3/end.wav";
          lastQuestionArray[i] = "/static/audio/woman3/lastQuestion.wav";
          break;
      }
      
    }
    //画面読み込み時に処理実行
    window.onload = startTimer;

    //タイマーの処理
    var timer = document.getElementById('timer');
    var swButton = document.getElementById('stop-btn');

    //クリック時の時間を保持するための変数定義
    var startTime;

    //経過時刻を更新するための変数。 初めは0で初期化
    var elapsedTime = 0;

    //タイマーを止めるにはclearTimeoutを使う必要があり、そのためにはclearTimeoutの引数に渡すためのタイマーのidが必要
    var timerId;

    //タイマーをストップ -> 再開させたら0になってしまうのを避けるための変数。
    var timeToadd = 0;

    //スタートの開始を記録する変数
    var startFrg = false;


    //計算方法として3735200ミリ秒経過したとしてそれを分とか秒に直すと -> 01:02:15
    function updateTimetText(){

        //h(時間) = 3735200 / 3,600,000ミリ秒で割った数の商　-> 1時間
        var h = Math.floor(elapsedTime / 3600000);

        //m(分) = 3735200  % 3,600,000 で / 60000(ミリ秒なので60000で割ってやる) -> ２分
        var m = Math.floor(elapsedTime % 3600000 / 60000);


        //s(秒) = 3735200 % 3,600,000 % 60000ミリ秒で / 1000 (ミリ秒なので1000で割ってやる) -> 15秒
        var s = Math.floor(elapsedTime  % 3600000 % 60000 / 1000);

        //HTML 上で表示の際の桁数を固定する　例）3 => 03　、 12 -> 012
        //javascriptでは文字列数列を連結すると文字列になる
        //文字列の末尾2桁を表示したいのでsliceで負の値(-2)引数で渡してやる。
        h = ('0' + h).slice(-2); 
        m = ('0' + m).slice(-2);
        s = ('0' + s).slice(-2);

        //HTMLのid　timer部分に表示させる　
        timer.textContent = h + ':' + m + ':' + s;
    }

        //再帰的に使える用の関数
        function countUp(){

            //timerId変数はsetTimeoutの返り値になるので代入する
            timerId = setTimeout(function(){
    
                //経過時刻は現在時刻をミリ秒で示すDate.now()からstartを押した時の時刻(startTime)を引く
                elapsedTime = Date.now() - startTime + timeToadd;
                updateTimetText()
    
                //countUp関数自身を呼ぶことで10ミリ秒毎に以下の計算を始める
                countUp();
    
            //1秒以下の時間を表示するために10ミリ秒後に始めるよう宣言
            },10);
        }

    function startTimer(){
        //在時刻を示すDate.nowを代入
        startTime = Date.now();
    
        //再帰的に使えるように関数を作る.タイマー開始
        countUp();



        
        selectQuestions.push(questionArray[Math.floor(Math.random() * questionArray.length)]);
       var i=0;
        while(i < situmonsu-1){
            var flg = true;
                selectText= questionArray[Math.floor(Math.random() * questionArray.length)];
                for (var j = 0;j < selectQuestions.length;j++){
                  if(selectQuestions[j].substr(selectQuestions[j].indexOf("question")) == selectText.substr(selectText.indexOf("question"))){
                       flg = false;
                  }
                }

                if(situmonsu >=5 && i == situmonsu-2){
                  selectQuestions.push(lastQuestionArray[rndNum]);
                  i++;
                  console.log("lastq");
                }else if(flg == true){
                  selectQuestions.push(selectText);
                  i++;
                }
            //次の画面に渡す選ばれた質問をセットする
            document.getElementById("resultQuestion").value=selectQuestions;
        }
     
        selectQuestions.push(endVoiceArray[rndNum]);

        //文字起こしの開始
        mojiokoshi();
    }

    function mojiokoshi(){
      //文字起こし結果のテキストが入る
      var mojiokoshi = [];

      //読み上げ用のカウント変数
      var count = 0;

      SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
      let recognition = new SpeechRecognition();
      recognition.lang = 'ja-JP';

      //認識中の音声も表示できるようにする
      recognition.interimResults = true;

      //録音を継続するためのもの(1分位できれる)
      recognition.continuous = true;

      //音声認識が完了した文字が入る
      let finalTranscript = '';
  
      var counterTime;         //counterMaxTimeからはじまって0になったら終了
      var counterMaxTime = 7;  //カウントダウン初期値(10秒からスタート)
      var countdownTimer;      //カウントダウンを１秒ごとに行うための変数


      //カウントダウン関数
      function countDown(){
        //０になったら録音をとめる
        if(counterTime == 0){
          recognition.stop()
        }else {
          counterTime--;
          console.log(counterTime +"秒前!!");
        }
      }

      //カウントダウンをリセットする
      function counterReset(){
        //カウントダウンの処理を止める
        clearInterval(countdownTimer);
        //初期値に戻す
        counterTime = counterMaxTime;
      }

      //面接終了時に画面を切り替える処理
      var endView = function(){
        var view = document.getElementById("all");
        var afterView  = document.getElementById("owari");
        document.getElementById("Tyudan").style.display="none";
        view.style.display = "none";
        afterView.style.display = "block";

      }

      //音声を認識したときに発火する
      recognition.onresult = (event) =>{ 

        //文字起こし系の処理
        let interimTranscript = ''; 
        for (let i = event.resultIndex; i < event.results.length; i++) {
          let transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          } else {
            interimTranscript = transcript;
          }
        }
  
        //文字起こし結果を配列に入れる
        mojiokoshi[count-1] = finalTranscript + interimTranscript ;
        //document.getElementById('test').innerText = mojiokoshi ;

        console.log(mojiokoshi);

        //話した言葉が「以上です」だった場合、録音を停止する。
        if(interimTranscript.includes("以上です")){
            recognition.stop();
        }
        
        //音声を認識したらカウントダウンをリセットする
        counterReset();
        //カウントダウン(１秒ごとに繰り返す)
        countdownTimer = setInterval(countDown, 1000);
      }

      //..各イベントにあわせてコンソールログに出力する(あとで消す)..//

      recognition.onend = function(end){
        console.log("おわったよ!");
        document.getElementsByClassName("myvideo_speaking").item(0).className = "myvideo";
        counterReset();
        if(count < situmonsu){
          counterTime = counterMaxTime;
          yomiage(count);
          finalTranscript="";
          count++;
        }else{
          yomiage(count);
        }
      }

      recognition.onerror = function(error){
        console.log(error);
      }

      recognition.onstart = function(end){
       console.log("はじまったよ!");
        
      }

      //........................ここまで..........................//

      //１番はじめの質問を読み上げる
      //初期値をセットする
      counterTime = counterMaxTime;
      yomiage(count);
      count++;

      function yomiage(count){

        var yomiage = new Audio(selectQuestions[count]);

        //質問内容をspeak.textに入れる
        if(count == 0){
          var start = new Audio(startVoiceArray[rndNum]);
          start.play();
          changeBorder(-1);
          start.onended = function(){
            document.getElementById('aicon1').className = "";
            document.getElementById('aicon2').className = "";
            document.getElementById('aicon3').className = "";
            window.setTimeout(function(){
              yomiage.play();
              changeBorder(count);
            },1500);
          }
        }else{
           yomiage.play();
           changeBorder(count);
        }

        yomiage.onended = function(){
          console.log("読み上げ終わり");
          document.getElementById('aicon1').className = "";
          document.getElementById('aicon2').className = "";
          document.getElementById('aicon3').className = "";
          if(count == situmonsu){
              //ストップウォッチを止める
              clearTimeout(timerId);
              //次の画面に経過時間を渡す
              document.getElementById('resultTime').value = timer.textContent
              //次の画面に文字起こし結果を渡す
              document.getElementById('resultMojiokoshi').value = mojiokoshi;
              endView();
          }else{
            //カウントダウン(１秒ごとに繰り返す)
            countdownTimer = setInterval(countDown, 1000);
            recognition.start();
            document.getElementsByClassName("myvideo").item(0).className = "myvideo_speaking";
          } 
        }
      }
    }

    function changeBorder(count){
      //面接官が話しているときの枠の色を変更する
      var initial;
      var num;
      //start
      if(count == -1){
          initial = startVoiceArray[rndNum].substr(startVoiceArray[rndNum].indexOf("audio/")+6,1);
          num = startVoiceArray[rndNum].substr(startVoiceArray[rndNum].indexOf("/start")-1,1);
      }else if(count == situmonsu){
          initial = endVoiceArray[rndNum].substr(endVoiceArray[rndNum].indexOf("audio/")+6,1);
          num = endVoiceArray[rndNum].substr(endVoiceArray[rndNum].indexOf("/end")-1,1);
      }else{ 
          initial = selectQuestions[count].substr(selectQuestions[count].indexOf("audio/")+6,1);
          num = selectQuestions[count].substr(selectQuestions[count].indexOf("/question")-1,1);
      }

      if(initial =="m"){
        initial = "man" + num;
      }else{
        initial = "woman" + num;
      }
 
      console.log(initial);
      if(document.getElementById('aicon1').src.includes(initial)){
        document.getElementById('aicon1').className = "chara_speaking1";
      }else if(document.getElementById('aicon2').src.includes(initial)){
        document.getElementById('aicon2').className = "chara_speaking2";
      }else if(document.getElementById('aicon3').src.includes(initial)){
        document.getElementById('aicon3').className = "chara_speaking3";
      }
    }


  //結果を見るボタンが押された時の処理
  function resultView(){
    stopVideo();
    document.forms.p_resultform.submit();
  }

    //カメラ関係の処理
    const localVideo = document.getElementById('myVideo');
        let localStream = null;
        let recorder = null;
        let blobUrl = null;
        let chunks = [];

    const tyudan = document.getElementById('Tyudan');
        
        
    // --- prefix -----
    navigator.getUserMedia  = navigator.getUserMedia    || navigator.webkitGetUserMedia ||
                              navigator.mozGetUserMedia || navigator.msGetUserMedia;
      
    /*　カメラの許可ON/OFF　*/
      getDeviceStream({video: true, audio: true})
        .then(function (stream) { // success
          localStream = stream;
          playVideo(localVideo, stream);
      }).catch(function (error) { // error
        　　return;
      });

 
    /*　カメラを停止する　*/
    function stopVideo() {
        //面接がまだ終わっていない場合、中断確認用のダイアログを表示する
        if(tyudan.innerText == "中断"){
          dialog = document.getElementById('dialog');
    　　　dialog.setAttribute('open', '');
        
        //面接が終了している場合、面接結果画面へ遷移する
        }else{
          if(recorder) {
            recorder.stop();
            console.log("stop recording");
          }
    
              pauseVideo(localVideo);
    
              // Blob
              const videoBlob = new Blob(chunks, { type: "video/webm" });
    
              // URLを作成
              blobUrl = window.URL.createObjectURL(videoBlob);
    
              tyudan.download = 'recorded.webm';    // ダウンロードしたファイル名
              tyudan.href = blobUrl;    // createObjectURL()で生成したURL
              
              $('#myVideo').val(blobUrl);  // videoタグのvalueにURLを挿入
    
              stopLocalStream(localStream); 
             console.log("結果を見る");
        }
         
    }

    //ダイアログのOKボタンが押された場合、ホームに戻る
    function OKDialog() {

      speechSynthesis.cancel();

      //window.locatin.href→画面遷移
      window.location.href = "/";
             
    }

    //ダイアログのキャンセルが押された場合、ダイアログを閉じる
    function closeDialog() {
      dialog.removeAttribute('open');
    }



        function stopLocalStream(stream) {
          let tracks = stream.getTracks();
          if (! tracks) {
            console.warn('NO tracks');
            return;
          }
          
          for (let track of tracks) {
            track.stop();
          }
        }
        
        function getDeviceStream(option) {
          if ('getUserMedia' in navigator.mediaDevices) {
            console.log('navigator.mediaDevices.getUserMadia');
            return navigator.mediaDevices.getUserMedia(option);
          }else{
            console.log('wrap navigator.getUserMadia with Promise');
            return new Promise(function(resolve, reject){    
              navigator.getUserMedia(option,
                resolve,
                reject
              );
            });      
          }
        }
      
        function playVideo(element, stream) {
          if ('srcObject' in element) {
            element.srcObject = stream;
          }else{
            element.src = window.URL.createObjectURL(stream);
          }
          element.play();
          element.volume = 0;
        

          /* --------録画開始------- */
          if(! localStream){
            console.warn('stream not ready');
            return;
          }
          if(recorder){
            console.warn('already recoding');
            return;
          }

          const options = {
          audioBitsPerSecond : 64000,
          videoBitsPerSecond : 512000,
          mimeType : 'video/webm; codecs=vp9'
          };
          recorder = new MediaRecorder(localStream, options); 

          chunks = [];    // 格納場所をクリア

          /* 録画進行中にインターバアルに合わせて発生するイベント */
          recorder.ondataavailable = function(evt){
          console.log("data available: evt.data.type=" + evt.data.type + " size=" + evt.data.size);
          chunks.push(evt.data);
          };
        

        /* 録画停止時のイベント */
        recorder.onstop = function(evt) {
          console.log('recorder.onstop(), so playback');
          recorder = null;
          playRecorded();

          
          
        };

        /* 録画スタート */
        recorder.start(1000);   // インターバルは1000ms
        console.log('start recording');
      }

      
        
      
        function pauseVideo(element) {
          element.pause();
          if ('srcObject' in element) {
            element.srcObject = null;
          }else{
            if (element.src && (element.src !== '') ) {
              window.URL.revokeObjectURL(element.src);
            }
            element.src = '';
          }
        }
        

        /* 録画を保存 */
        function playRecorded(){
          if(! blobUrl){
            window.URL.revokeObjectURL(blobUrl);
            blobUrl = null;
          }
                        
        }


     


   