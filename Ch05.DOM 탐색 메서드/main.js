/*DOM탐색 메서드란
- 문서객체의 선택이 이동되는 메서드이다. 흔히 가족관계 선택을 의미한다
-(부모,조상,자손,후손,형제)          

parent()          : 선택된 문서객체의 부모요소를 선택한다
parents()         : 선택된 문서객체의 모든 조상요소를 선택한다
parents('선택자') : 선택된 문서객체의 조상요소 중 매개변수에 작성한 요소를 선택한다
parentsUntil('선택자')  : 선택된 문서객체의 조상요소 중 매개변수에 작성한 요소 전까지 선택된다
children()        : 선택된 문서객체의 모든 자손요소를 선택한다
children('선택자'):선택된 문서객체의 자손요소 중 매개변수에 작성한 요소를 선택
find('선택자')    :선택된 문서객체의 후손요소 중 매개변수에 작성한 요소를 선택   //더 큰 개념 / 자손의 자손의 자손의 자손까지 가능
siblings()        :선택된 문서객체의 동위요소 중 모든 요소를 선택(형제요소 들 모두 선택)
siblings('선택자') :선택된 문서객체의 동위요소 중 매개변수에 작성한 요소를 선택(형제요소 들 모두 선택)
next()            :선택된 문서객체의 다른 동위요소를 선택 (동생 요소를 선택)
nextAll()         :선택된 문서객체의 다른 동위요소 모두 선택(동생 요소 모두 선택)
nextUntil('선택자'):선택된 문서객체의 동위요소 중 매개변수에 작성한 요소 전까지 선택 / 동생 전까지 선택
prev()             :선택된 문서객체의 이전 동위요소를 선택(형,누나 요소를 선택)
prevAll()          :선택된 문서객체의 모든 이전 동위요소를 선택(형,동생 모두 선택)
prevUntil('선택자'):선택된 문서객체의 동위요소 중 매개변수에 작성한 요소 전까지 선택 / 형 전까지 선택  
find('+ 선택자')   :선택된 문서객체의 바로 뒤에 있는 동위요소만 선텍
find('~ 선택자')   :선택된 문서객체의 뒤에 있는 모든 동위요소만 선택
*/



$(document).ready(function()   {     //준비구문
//부모,조상 요소 재선택
$('.prt').parents().css({
 padding: 20,
 border:"3px solid black",
});
//parents
$('.prt').parents('div').css('border-color','red');   //조상들중에 div만 선택

//parent
$(".prt").parent().css("border-color","blue");

//parentsUntil
$('.prt').parentsUntil("body").css("border- style","dashed");

///자손,후손 요소 재선택

//children
$('.chd').children().css("color","red");

$('.chd').children('p').css("text-decoration","underline");

//find
$(".fnd").click(function() {
// > 꺽새 추가로 넣어주면 자손만 선택 가능
$(this).find("h3").css("background","pink");
$(this).find("li").css("background","lightblue");
})


//형제 요소 재선택

//siblings
$('.bro').siblings().css('font-size',15);
$('.bro').siblings('h6').css('font-style','italic');

//next,prev
$('.bro').next().css("text-decoration","underline");
$('.bro').prev().css("text-decoration","underline");

//nextAll
$('.bro').nextAll().css("color","red");  //동생 모두 빨간색
$('.bro').prevAll().css("color","blue");  //형들 모두 파란색

//nextUntil
$('.bro').nextUntil('h6').css("background","yellow");
$('.bro').prevUntil('h1').css("background","orange");

//find('+ 선택자') / find('~ 선택자')  
$(".bro").find("+ h4").html("제목태그@@@");
$(".bro").find("~ h6").html("제목태그@@@");
});