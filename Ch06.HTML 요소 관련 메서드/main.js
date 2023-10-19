/* HTML요소 관련 메서드
- text() , html() : 문서객체 안의 내용을 가져오거나 추가할 떄 사용하는 매서드 // 컨텐츠 내용에 사용하는 
- attr() , prop() : 문서객체 속성의 값을 가져오거나 속성을 추가하는 메서드  // 태그의 속성의 값 class / id의 값  
-removeAttr() : 문서객체 속성을 제거하는 메서드      

text() , html() 비교
- 문서 객체의 컨텐츠를 컨트롤 하는 메서드
- 둘 다 게터와 세터를 가지고 있다
- 가장 큰 차이는 태그문자를 문자로 인식하는지, 태그로 인식하는지이다 

attr() , prop() 비교
- 문서객체의 태그 속성을 컨트롤하는 메서드
- 둘 다 게터와 세터를 가지고 있다
- 가장 큰 차이는 속성값을 가지고 올 떄의 차이다
- attr() 메서드는 html의 입장에서 prop()는 자바스크립트의 입장에서 가져온다


*/


$(document).ready(function()   {
//text() , html() 비교
//매개변수가 없는 경우는 게터 (값을 가져오는 역할)
let text1 = $('.text1').text();  
let text2 = $('.text2').html();

console.log(text1);
console.log(text2);

//매개변수가 1개인 경우는 세터
let text3 = $('.text3').text('<a href="#">링크태그</a>');  // 택스트로 인식 /따옴표 안에 따옴표를 작성할 경우 다른걸로 작성해야 인식을 한다 (큰따옴표 / 작은 따옴표)  
let text4 = $('.text4').html('<a href="#">링크태그</a>');  // 링크태그로 출력

//매개변수가 함수인 경우(세터)
$('.box1 h1').text(function(index) {
 return 'title tag' + (index+1); // 인덱스를 활용하여 텍스트 마지막에 숫자와 함께 출력
})

$('.box2 p').html(function(index) {
   return 'paragraph tag' + (index +1);
})

//attr() , prop() 비교

//매개변수가 1개인 경우(게터)
let src1 = $('img').attr("src");
let src2 = $('img').prop("src");

$('.img1').html(src1);  // test.jpg   src값을 가져옴 // html 입장에서
$('.img2').html(src2);  //이미지 주소를 가져옴 //자바 스크립트 입장에서


//매개변수가 2개인 경우(세터)
$('#chk1').attr('checked',"checked");  // checked가 비어있으면 undefind 로 반환 / html 입장에서
$('#chk2').prop('checked',true);       // checked가 비어있으면 ture 와 false로 반환 / 자바 스크립트 입장에서

//매개변수가 객체인 경우(세터)
// $('img').attr({  // prop를 사용해도 되지만 보통 attr를 많이 사용한다
// width: 800 ,
// height: 500,
// });

//매개변수가 함수인 경우(세터)
$('.cat').attr('width',function(index){
 return (index + 1) * 100;   // 0 + 1 * 100 / 1+ 1*100 ...  사진이 점점 큰 사이즈로 출력 100,200,300
});

//속성 삭제 메서드
$('img').first().removeAttr("width"); // img속성의 첫번째를 선텍, wtdth를 삭제한다







}); 