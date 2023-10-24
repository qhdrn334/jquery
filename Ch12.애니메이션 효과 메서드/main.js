/* 
애니메이션 효과 메서드
- css 속성의 transition 속성과 비슷한 느낌이지만 애니메이션 메서드로 더 디테일하게 사용할 수 있다

animate() : 애니메이션 효과 메서드
delay() : 애니메이션 효과를 지연시키는 메서드
stop() : 애니메이션 효과를 중지시키는 메서드

animate() 메서드 문법
- animate({css 속성 정의}, 시간, 콜백함수)       ex) : 중괄호 안에 css 요소 : 정의 모두 작성
*/

$(document).ready(function()   {
   //animate() 
   $('.btn1').click(function(){
    $('.block1').animate({          //객체 형태니깐 ; 말고 , 로 구분
      left : 300,
      top : 300,
    },'slow',
    function(){
       $(this).css("background-color","red");
    })
   });

  //delay()
  $('.btn2').click(function(){
    $('.block2').delay(0).animate({left:300},1000);    // 1초동안 300px 이동해라 / 딜레이 0초
    $('.block3').delay(500).animate({left:300},1000);  // 1초동안 300px 이동해라 / 딜레이 0.5초
    $('.block4').delay(1000).animate({left:300},1000); // 1초동안 300px 이동해라 / 딜레이 1초
  });

//상대값을 사용하여 적용 : +=, -=을 사용한다
$('.btn3').click(function(){
 $('.block5').animate({
    left: '+=100'    //+=를 문자열로 인식하기때문에 따옴표 필요
   },"slow");
 });

 //정의된 값을 사용하여 적용
 //width , height 같은 속성은 값에 show , hide , toggle 등 시각효과 메서드를 쓸 수 있다
 $('.btn4').click(function(){
    $('.block6').animate({
       height : 'toggle'
    }, 'slow');
  });
 
  //Queue(대기열) 적용
  //큐는 먼저 쓴 코드 먼저 실행하고, 나중에 쓴 코드를 실행하는 것을 의미한다
  $('.btn5').click(function(){
   $('.block7').animate({
      left : 300
   }, 2000);
  //시각효과 메서드나 animate() 메서드에 시간차가 있는 경우 뒤에 명령보다 먼저 실행되지만
 //그 시간을 다른 명령이 기다리지는 않는다
   // $('.block7').css("background-color","pink");


   //같은 animate() 메서드는 큐 방식으로 대기해준다 / 동일하게 2초 기다려준다(큐 적용)
   $('.block7').animate({
      left : 0
   }, 2000 );
  });

//stop()
$('.btn6').click(function(){
//stop의 매개변수 기본값을 false,flase 이다
//첫번째 매개변수가 true일 때 큐 대기중인 애니메이션 모두 제거 / 가는 도중에 멈춤
//두번째 매개변수가 true일 때 진행중인  애니메이션 강제 종료 / 되돌아옴
//둘다 true일때는 수행만 되고 앞 뒤 애니네이션 모두 강제 종료(2초)
   $('.block7').stop(true,true);
  });
});
