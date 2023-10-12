/* 선택자
- jQuery는 자바스크립트에서 파생됬기 때문에 객체 선택 방식을 사용한다 (자바스크립트와 셀렉 방법은 같지만 규칙이 다른것)     
- 자바스크립트보다 쉽다
- 셀렉터라고도 한다*/

/* Element 관련 선택자
순번이 1부터 시작
*          : $('*') - 모든 문서객체를 선택
element    : $('h1') - 특정 태그를 모두 선택
#id        : $('#text') - 작성된 id값을 갖는 문서객체를 선택
.class     : $('.text') - 작성된 클래스값을 갖는 문서객체를 선택
[속성='값']: $('input[type=text]') - 해당 요소의 태그속성명과 속성값이 갖는 문서객체를 선택
A > B      : $('div > ul') - 앞에 작성된 요쇼의 자식인 요소를 선택 / div안에 ul 만 있을 떄 사용
A B        : $('div ul') - 앞에 작성된 요소의 후손인 요소를 선택 / div안에 span안에 ul 있을 떄 사용
A + B      : $('h1 + h2') - 앞에 작성된 요소의 바로 뒤에 있는 동위선택자를 선택
A ~ B      : $('h1 ~ h2') - 앞에 작성된 요소 뒤에 있는 모든 동위선택자를 선택
:not       : $('h1:not(.text)') - 앞에 작성된 요소 중 괄호 안에 클래스명이 아닌것들 선택
:nth-child(n) : $('div:nth-child(n)') - 해당 요소 중 n번째 작성된 요소를 선택
:first-child : $('div:first-child ') - 해당 요소 중 첫번쨰로 작성된 요소를 선택
:last-child : $('div:ast-child ') - 해당 요소 중 마지막으로 작성된 요소를 선택
:nth-child(odd) : $('div:nth-child(odd)') - 해당 요소 중 홀수번째 작성된 요소를 선택
:nth-child(even) : $('div:nth-child(even)') -해당 요소 중 짝수번째 작성된 요소를 선택

배열 선택자여서 순번이 0부터 시작된다 / 실무에서 주로 사용 
:eq              :nth-child(n) 와 같다
:first           :first-child와 같다
:last            :last-child와 같다
:odd             :nth-child(odd)와 같다
:even            :nth-child(even)와 같다
:gt(n)           : $('div:gt(n)') - 해당 요소 중 배열번호가 n보다 큰 요소를 선택
:lt(n)           : $('div:lt(n)')- 해당 요소 중 배열번호가 n보다 작은 요소를 선택
 */
/* input 관련 선택자
 :input       : $(*:input) - 모든 input 요소를 선택
 :text        : $('input:text') - input 태그 중 type값이 text인 요소를 선택
 :password    : $('input:password ') - input 태그 중 type값이 password 인 요소를 선택
 :radio       : $('input:radio ') -   input 태그 중 type값이 radio 인 요소를 선택
 :checkbox       : $('input:checkbox ') - input 태그 중 type값이 checkbox인 요소를 선택
 :submit      : $('input:submit  ') - input 태그 중 type값이 submit 인 요소를 선택
 :reset    : $('input:reset  ') - input 태그 중 type값이 reset인 요소를 선택
 :button    : $('input:button   ') - input 태그 중 type값이button 인 요소를 선택
 :file   : $('input:file  ') -   input 태그 중 type값이 file인 요소를 선택
 :enabled   : $('input:enabled   ') -   input 태그 중 사용 가능한 요소를 선택
 :disabled  : $('input:disabled  ') -   input 태그 중 사용 불가능한 요소를 선택
 :selected  : $('input:selected  ') -   option 태그 중 type값이 selected인 요소를 선택
 :checked  : $('input:checked  ') -   input 태그 중 체크된 요소를 선택
 */


$(document).ready(function(){
 //전체 선택자
 $('*').css('font-size',30);

 //태그
 $('h3').css("text-decoration","underline");
 $('#text01').css("color","red");

 //클래스
 $('.odd').css("color","pink");
 $('.even').css("color","lightblue");

 //속성
 $("p[name=name1]").css("color","pink");
 $("p[name=name2]").css("color","lightblue");

 //자손
 $('.list > li').css("font-weight","bold"); // 리스트 태그 안에 있는 모든 자손 요소에 볼드 처리

//후손
$('body.listA').css("font-style","italic");

//A + B 
$('.listA + li').css("color","red");

// A ~ B
$('.listA ~ li').css("color","pink");

//not
$(".list > li:not(.listA)").css("list-style","none");

//배열 선택자
// $('div:nth-child(1)').css('background','red');  - eq와 똑같은 기능이지만 순번만 다름
$('div:eq(0)').css('background','red');
$('div:eq(1)').css('background','orange');
$('div:eq(2)').css('background','yellow');
$('div:eq(3)').css('background','green');
$('div:eq(4)').css('background','blue');
$('div:eq(5)').css('background','navy');
$('div:eq(6)').css('background','purple');

//first
$('div:first').css("border-radius","10px 0 0 10px");
$('div:last').css("border-radius"," 0  10px 10px 0");

//odd,even
$('div:odd').css("color","white");
$('div:even').css("color","black");

//gh,lt
$('div:gt(3)').css("text-decoration","underline");
$('div:lt(3)').css("font-style","italic");

//input 선택자
$('input:text').css('border','1px solid red');
$('input:password').css('border','1px solid blue');
});


