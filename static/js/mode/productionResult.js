var questionText = [
    //自己紹介について
    "自己PRしてください。",
    "自己紹介をしてください。",
    "自分を一言で表してください。",
    "あなたはどのような性格ですか？ ",
    "あなた自身をもので例えると何か、理由も合わせて教えてください。",
    "あなたの強みを仕事でどのように活かしていきたいですか？",
    "友達や周囲の人からどのような人だといわれますか？",
    "休日はどのように過ごしていますか？",
    "趣味はありますか？",
    "question10",

    //志望動機について
    "志望動機を教えてください。",
    "弊社で成し遂げたいことはありますか？ ",
    "この業界を志望している理由はありますか？",
    "弊社のイベントなどに参加されたことはありますか？",
    "弊社の名前を最初に知ったきっかけは何ですか？",

    //経験談について
    "学生時代に頑張ったことは何ですか？",
    "学生時代に打ち込んだことは何ですか？ ",
    "部活動やサークル活動は行っていましたか？",
    "卒業論文のテーマについて教えてください。",
    "アルバイトは何をしていましたか？",
    "ボランティア活動などの経験はありますか？",
    "課題を乗り越えた経験について教えてください。",
    "これまでに最も苦労した経験について、その解決方法も含めて教えてください。",
    "これまでの人生で、何かに向かって努力した経験をきかせてください。",
    "努力を継続するためのモチベーションの源泉は何ですか？",
    "チームで苦労をした経験はありますか？",
    "あなたの失敗談を教えてください。",

    //自己評価について
    "長所と短所を教えてください。",
    "短所を克服するために努力していることはありますか？",
    "あなたの長所は企業でどのように役立つと思いますか？",
    "あなたの長所を3つ挙げてください。",
    "あなたの短所を3つ挙げてください。",
    "現在のあなたの課題は何だと思いますか？",

    //目標"キャリアプランについて"
    "入社してやりたいことはありますか？",
    "入社したら入りたい部署はありますか？",
    "入社後のキャリアプランを教えてください。",
    "弊社の業務の中で気になっている業務や事業部はありますか？",
    "10年後に達成していたい目標はありますか？",
    "10年後はどうなっていたいですか？",
    "将来の夢を教えてください。",
    "これから実現したい夢は何ですか？",
    "どのような社会人になりたいですか？",
    "question42",

    //勤務条件について
    "転勤は可能ですか？",
    "会社までの通勤時間はどのくらいですか？",
    "現在ご実家にお住まいですか？",
    "海外で働きたいなどの希望はありますか？",
    "住まいや暮らしが変わることに苦手意識はありますか？",
    "新しい人や仕事にすぐに打ち解けることに苦手意識はありますか？",
    "休日出勤の可能性もありますが、大丈夫ですか？",

    //答えにくい"困りやすい質問"
    "弊社が第一志望ですか？",
    "弊社と同じ業界の他者との違いは何だと思いますか？",
    "この業界の中でも弊社のサービスについての率直な感想を教えてください。",
    "並行して他の企業はどのような業界を受けていますか？ ",
    "他に何社ほど受けておられますか？",
    "弊社で内定が出た場合、就活は終了しますか？",

    //	その他
    "最近気になっているニュースはありますか？",
    "あなたにとって働くとは何ですか？ ",
    "この業界ではどのようなスキルが重要だとお考えですか？",
    "目標を達成するうえで一番大切なことは何だとお考えですか？",
    "ストレスがたまったときはどのようにリフレッシュしますか？",
    "つらいことや悲しいことは自分の力で乗り越えますか、他者に助けを求めますか？",
    "あなたの尊敬する人物は誰ですか？",
    "好きな言葉や座右の銘はありますか？",
    "尊敬する人と比べて、現時点で自分に足りないものは何だと思いますか？",
    "「周囲から尊敬される人材」とはどのような人だと思いますか？",
    "尊敬している作家や偉人などはいますか？",
    "一緒に働くにあたって、どんな仲間や先輩に魅力を感じますか？",

    "最後に、何か質問はありますか",

];

//面接キャラ情報(パス)の取得
var charasArray = document.getElementById("mensetuName").innerHTML;
var resultQuestion = document.getElementById("resultQuestion").innerHTML;
var resultMojiokoshi = document.getElementById("resultMojiokoshi").innerHTML;


document.getElementById("mensetuName").innerHTML = "";
document.getElementById("resultQuestion").innerHTML = "";
document.getElementById("resultMojiokoshi").innerHTML = "";
document.getElementById("resultField").innerHTML = "";

//,ごとに区切って配列に入れる
charasArray = charasArray.split(',');
resultQuestion = resultQuestion.split(',');
resultMojiokoshi = resultMojiokoshi.split(',');


//キャラ情報(パス)をもとに面接者名を表示する
for(var i=0;i < charasArray.length;i++){
    //パスから画像名を取り出す
    var charaName = charasArray[i].substr(charasArray[i].lastIndexOf("/")+1);
    switch (charaName){
        case 'man1.png':
            charasArray[i] = "八木巻 涼太";
            break;
        case 'man2.png':
            charasArray[i] = "小井沼 雄二";
            break;
        case 'man3.png':
            charasArray[i] = "鳳凰 仁";
            break;
        case 'woman1.png':
            charasArray[i] = "如月 玲";
            break;
        case 'woman2.png':
            charasArray[i] = "早乙女 真由美";
            break;
        case 'woman3.png':
            charasArray[i] = "藤野 福";
            break;
    }
    document.getElementById("mensetuName").innerHTML = document.getElementById("mensetuName").innerHTML + charasArray[i] + "　";
    
}
for(var i=0;i < resultQuestion.length;i++){
  var num;
  if(resultQuestion[i].substr(resultQuestion[i].lastIndexOf("/")+1,1)=="q"){
      num = parseInt(resultQuestion[i].substr(resultQuestion[i].lastIndexOf("question")+8,resultQuestion[i].length-resultQuestion[i].indexOf(".")));
  }else if(resultQuestion[i].substr(resultQuestion[i].lastIndexOf("/")+1,1)=="l"){
      num = questionText.length;
  }

  
  if(resultMojiokoshi[i] == false || resultMojiokoshi[i] == undefined){
    resultMojiokoshi[i] = "※認識できませんでした※";
  }
  document.getElementById("resultField").innerHTML = document.getElementById("resultField").innerHTML +
                                         "<details><summary>" + questionText[num-1] + "</summary><p>" + resultMojiokoshi[i] +"</p></details>";
}


