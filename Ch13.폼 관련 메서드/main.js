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











});