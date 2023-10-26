/*   
JSON
- JSON은 javascript object nation의 약자
- 자바스크립트에서 데이터를 객체 표기법으로 나타내는 것을 의미한다
- JSON을 사용하는 이유는 웹서버와 데이터를 교환하기 위해서

JSON의 문법
- javascript 객체에서 키명을 큰따옴표로 처리해준 형태
- js : {key: value1, key2 : value2}
- json : {"key1": value1, "key2":value2}  // 무조건 큰따옴표만 가능

json 값
- 문자열, 숫자, 객체, 배열, true / false , null중에 하나여야 한다
- 문자 {"name" : "홍길동"}
  숫자 {"age" : 30}
  boolean : {"elail" : true}
  객체 : {"member" : {"name": " 홍길동, "age" : 30, "elail": true}}  // json은 객체형태로 가장 많이 사용한다
  배열 : {"mamber":["홍길동","김길동", "박길동"]}
  null : {"tel": null}
 
JSON.parse()
- JSON 전용 형태의 문자열을 객체 데이터로 바꿔준다
JSON.stringify()
- JSON 전용 형태의 객체 데이터를 문자열로 바꿔준다

*/
/*
   localStorage
   - 브라우저에서 제공하는 API로 데이터를 저장할 수 있다
   - 데이터의 영속성은(영원히 있는거) 동일한 컴퓨터, 동일한 브라우저를 사용할 때만 해당된다(같은 PC)
   - 데이터를 저장할 때 문자열 데이터 타입만 지원한다
   -  setItem() 메서드는 저장소에 데이터를 저장한다 / 매개변수는 (키,값)
   - getItem() 메서드는 저장에서 데이터 항목을 검색한다 / 매개변수는 (키)
   

   API
   - 라이브러리는 함수들의 집합이라면, API는 라이브러리에 접근하기 위한 규칙을 정의한 것
   
    



   */
$(document).ready(function()   {
    //JSON.parse()
    let originDate = '{"name":"홍길동", "age":30 , "email" : "qkdqkd334@name.com", "birth" : "2023-10-02"}';
    console.log(originDate);

    let changeDate = JSON.parse(originDate);  // 문자열 데이터를 객체로 전환하여 객체로 활용 가능
    console.log(changeDate);
    
    //날짜타입은 JSON에서 객체로 변환될 때 허용되지 않는다(날짜가 아닌 문자열로 인식) / 그래서 밑에 방법이 필요(날짜타입으로 변경 후 출력 가능) 
    let birth = new Date(changeDate.birth);

    $(".name").html(changeDate.name);
    $('.age').html(changeDate.age);
    $('.email').html(changeDate.email);
    $('.birth').html(birth);
    
   //JSON.stringify()
   let objectDate = {
      name: "전길동",
      age: 50 ,
      birth : "1999-10-10"
   };
   console.log(objectDate);           // 객체 내용 출력
   console.log(typeof objectDate);   //타입이 뭔지 출력    객체인 상태

   //제이슨으로 바꾸는중
   let jsonDate = JSON.stringify(objectDate);  // 문자열로 변경 
   console.log(objectDate);           // 객체 내용 출력
   console.log(typeof objectDate);   //타입이 뭔지 출력  / 문자열 상태

   //localStorage
   //데이터 저장
   let myObj = {name : "방윤정", age: 28, birth:'1996-10-02'};
   let myJson = JSON.stringify(myObj);
   localStorage.setItem("testJson",myJson);
   console.log(myJson); 

   //데이터호출
   let json =localStorage.getItem("testJSON");
   let obj = JSON.parse(json);     //객체로 변환하여 사용
   console.log(obj); 

 //총 정리
/* 제이슨은 객체 / 문자열을 유연하게 변경하기 위해 사용
데이터를 객체로 바꿔서 필요한 데이터를 유연하게 활용하기 위해서는 객체로 변경해야되고
데이터를 저장하기 위해서는 객체가 아닌 총 데이터를 통으로 저장해야되기 때문에 문자열로 변경이 필요하다

즉 , 데이터를 필요에 따라 활용하고  저장하기 위해서 JSON 을 사용하는 것이다
*/










});