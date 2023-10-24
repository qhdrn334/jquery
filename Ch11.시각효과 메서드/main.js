/* 
시각 효과 메서드
 - 문서객체를 사라지게 하거나 나타나게 하는 것을 의미한다

 show() : 좌측 상단 기준으로 요소를 나타나게 하는 메서드
 hide() : 좌측 상단 기준으로 요소를 사라지개 하는 메서드
 toggle() : show()와 hide()를 번갈아 가면서 실행하는 메서드
 slideDown() : 상단 기준으로 요소를 나타나게 하는 메서드
 slideUp() : 상단 기준으로 요소를 사라지게 하는 메서드
 slideToggle() :  slideDown() slideUp() 번갈아 가면서 실행하는 메서드
 fadeIn() : 투명도 기준으로 요소를 나타나게 하는 메서드
 fadeOut() : 투명도 기준으로 요소를 사라지게 하는 메서드
 fadeToggle() : fadeIn() adeOut() 번갈아 가면서 실행하는 메서드

 시각효과 메서드 매개변수
 - ex) show(시간,콜백함수)    1000이 1초
- 시간 매개변수는 생략 , fast , slow , 밀리초단위가 올 수 있다
- 콜백함수는 시각효과 매서드가 실행된 후 주고 싶은 명령을 작성한다
*/

$(document).ready(function()   { 
   // show ,  hide, , slideUp, slideDown ,  fadeIn ,   fadeOut
   // 생략 , slow , fast , 밀리초단위
$('button').eq(0).click(function(){
   $('p').slideUp('slow');
});
$('button').eq(1).click(function(){
   $('p').slideDown('slow');
});

//toggle,  slideToggle , fadeToggle 
$('.btn1').click(function(){
 $(this).next().toggle('slow');
});
$('.btn2').click(function(){
   $(this).next().slideToggle('slow');
  });
  $('.btn3').click(function(){
   $(this).next().fadeToggle('slow');
  });

  //매개변수에 콜백함수 사용
  $('.btn4').click(function(){
   $(this).next().toggle('slow',function(){
    $(this).css('background-color','lightblue');
     });
  });

  $('.btn5').click(function(){
   $(this).next().slideToggle('slow',function(){
    $(this).css('background-color','lightblue');
     });
  });

  $('.btn6').click(function(){
   $(this).next().fadeToggle('slow',function(){
    $(this).css('background-color','lightblue');
     });
  });









});