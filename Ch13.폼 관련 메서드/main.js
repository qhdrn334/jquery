/*
폼 관련 메서드 /  실무에서 많이 사용
change() : 요소값이 변경되었을 때 이벤트를 발생시키는 메서드
submit() : 폼 전송을 제어하는 메서드
*/


$(document).ready(function()   {
   //change() /  checkbox
   $('#allChk').change(function(){
     let chk = $(this).prop("checked");
     if(chk){
        $(this).prevAll().prop("checked",true);
     } else {
        $(this).prevAll().prop("checked",false);
     }
});

//select
$('#fruit').change(function(){
  let fruit = $(this).val();    //제이쿼리에서 val로 값을 가져올 수 있다(게터)
  
  $('.sel').html('선택하신 과일은' +fruit + "입니다");
});


//submit() / submit메서드는 데이터를 전송하는 사용이 아닌 전송을 시키는 이벤트의 개념만 가진다 / 살재 전송 메서드 X
$('#joinForm').submit(function(e){
 e.prventDefault();

 let val1 = $('#id').val();
 let val2 = $('#password').val();

 if (val1 =='' || val2 =='') {
   alert('값을 모두 작성하세요')
 } else {
   alert("회원가입이 완료되었습니다.");
   document.joinForm.submit();    //데이터를 전송하는 자바스크립트 문법
  
}
});










});