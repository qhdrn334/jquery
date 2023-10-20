/* 
이벤트 관련 메서드
- 웹페이지에서 발생하는 모든 작업을 이벤트라고한다.
- 자바스크립트에서는 이벤트 속성을 부여했지만 jQuery에서는 이벤트 속성 자체를 메서드로 사용할 수 있다

이벤트 속성
마우스 관련 : click , ablclick, mouessnter, mouseleave
키보드 관련 : keyup , keydown , keypress
폼태그 관련 : submit, change , focus , blur
윈도우 관련 : load, resize , scroll , error

이벤트 메서드
on() : 문서객체에 이벤트를 연결(bind(),live(),delegate() 대체)           addeventlisner와 동일
off() : 문서객체에 이벤트를 제거(unbind(),die(),undelgate() 대체)
one() : 문서객체에 이벤트를 1번만 연결
hover() : 문서객체에 마우스를 올렸을 때와 나올 때 이벤트 발생
trigger() : 문서객체에 이벤트를 강제적으로 발생
*/

$(document).ready(function()   {
//on() 
//이벤트를 1개 연결하는 경우
$('h2').on('click',function(){
$(this).toggleClass('active');         //클릭하면 active Class를 넣었다가 뺏다가 
});

//on() , 이벤트를 여러개 연결하는 경우
$('a').on('focus mouseEnter',function(){  //띄어쓰기 1번만 하면 계속 이어서 쓸 수 있다 //focus mouseEnter
 $(this).addClass('active');
});
$('a').on('blur mouseEnter',function(){
$(this).removeClass('active');
});

//on() , 여러개 이벤트를 각각 연결하는 경우 / 객체 사용
$('h3').on({
mouseenter: function(){
   $(this).addClass('active');
},
mouseleave : function(){
   $(this).removeClass('active');
}
});

//off() 이벤트 연결 제거
$('h2').off('click');     // 위에 h2의 클릭 이벤트를 제거 

//이벤트 한번만 연결
//one
$('h2').one('click',function(){
alert('클릭이 한번만 적용됌');
});

//이벤트 타입 메서드
$('button').dblclick(function () {
alert('더블클릭');
});

//hover(콜백함수,콜백함수) 앞에 있는게 마우스 엔터 역할 / 뒤에 있는 게 마우스 리브 역할
$('p').hover(function(){
   $(this).css('font-size',50);
}, function(){
   $(this).css('font-size',20);
});


//trigger() / 실무에서 자주 사용
$('span').click(function(){
 $(this).html(function(index,text){
   return text + '★' ;
 })
});
//setInterval - 몇 초 마다 실행
//setTnterval - 몇 초 후에 실행
setInterval(function (){
   $('span').last().trigger('click');  //클릭 이벤트를 강제 발생 
}, 3000);



});