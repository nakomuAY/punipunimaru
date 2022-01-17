(function(){

  var mojiokoshi;

  SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
  let recognition = new SpeechRecognition();

  recognition.lang = 'ja-JP';
  recognition.interimResults = true;
  recognition.continuous = true;

  let finalTranscript = '';

  recognition.onresult = (event) => {
    let interimTranscript = ''; 
    for (let i = event.resultIndex; i < event.results.length; i++) {
      let transcript = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        finalTranscript += transcript;
      } else {
        interimTranscript = transcript;
      }
    }
    
    mojiokoshi = finalTranscript + interimTranscript ;
    document.getElementById('test-div').value = mojiokoshi ; 
    
  }
 
    //htmlのidからデータを取得
    //取得したデータを変数に代入

    var timer = document.getElementById('timer');
    var swButton = document.getElementById('start-btn');



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


    //ミリ秒の表示ではなく、分とか秒に直すための関数, 他のところからも呼び出すので別関数として作る
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

  //startボタンにクリック時のイベントを追加
    swButton.addEventListener('click',function(){

        //質問内容読み上げの準備
        var speak   = new SpeechSynthesisUtterance();
        var question = document.getElementById("question");
        speak.rate  = 1; // 読み上げ速度 0.1-10 初期値:1 (倍速なら2, 半分の倍速なら0.5, )
        speak.pitch = 0;　// 声の高さ 0-2 初期値:1(0で女性の声) 
        speak.lang  = 'ja-JP'; //(日本語:ja-JP, アメリカ英語:en-US, イギリス英語:en-GB, 中国語:zh-CN, 韓国語:ko-KR)
      
        //ボタンテキストを変更
        swButton.textContent="録音を終了する";


        //ストップウォッチがスタートしているか判断
        if(startFrg == false){
           //startFrgをtrueにする(ストップウォッチをスタート)
            startFrg = true;

            //質問内容をspeak.textに入れる
    　　    speak.text  = question.value;

            //読み上げ開始
   　　     speechSynthesis.speak(speak);

            //読み上げ終了後のイベント
            speak.onend = function(){

                //在時刻を示すDate.nowを代入
                startTime = Date.now();
    
                //再帰的に使えるように関数を作る.タイマー開始
                countUp();

                //文字起こし用の録音開始
                recognition.start();
          
            }
        }else{
            if(speechSynthesis.speaking == true){
              speechSynthesis.cancel();
             }
            //録音を止める
            recognition.stop();
            
            //ストップウォッチを止める
            clearTimeout(timerId);

            //次の画面に経過時間を渡すための準備
            document.getElementById('resultTime').value = timer.textContent

            //次の画面へ遷移
            document.forms.testform.submit();

       }

    })();
})();