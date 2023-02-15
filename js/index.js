// const rock = ['가위','바위','보'];

function myGame(num){
    let meimg = document.getElementById('meimg');
    let metxt = document.getElementById('metxt'); // 나 

    let comimg = document.getElementById('comimg');
    let comtxt = document.getElementById('comtxt'); // 컴퓨터

    let comnum = Math.floor(Math.random()*3); //컴퓨터 랜덤



    if(num==0){
        //가위
        meimg.innerHTML=' <img src="images/gaw.png" alt="주먹">'
        metxt.innerHTML='가위'
   
    }else if(num==1){
        //바위
        meimg.innerHTML=' <img src="images/ba.png" alt="주먹">'
        metxt.innerHTML='바위'

    }else{
        //보
        meimg.innerHTML=' <img src="images/bobo.png" alt="주먹">'
        metxt.innerHTML='보'
    }
 

    if(comnum==0){
        //가위
        comimg.innerHTML=' <img src="images/gaw.png" alt="주먹">'
        comtxt.innerHTML='가위'
   
    }else if(comnum==1){
        //바위
        comimg.innerHTML=' <img src="images/ba.png" alt="주먹">'
        comtxt.innerHTML='바위'

    }else{
        //보
        comimg.innerHTML=' <img src="images/bobo.png" alt="주먹">'
        comtxt.innerHTML='보'
    }


    //결과 텍스트 출력 
    let r = num - comnum;
    let result;

    // 가위 바위 보
    // 0  1  2 
    // 0 - 1 = -1 (패)
    // 0 - 2 = -2 (승)
    // 1 - 0 = 1 (승)
    // 1-2 = -1 (패)
    // 2-0 = 2 (패)
    // 2-1 = 1(승)


    if(r==-1||r==2){
        result="졌습니다.";
    }else if(r==1||r==-2){
        result="이겼습니다.";
    }else{
        result="비겼습니다. 다시하세요";
    }

    document.getElementById('result').innerHTML=result;


}