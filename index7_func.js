
// 함수

//       함수명   매개변수(parameter)
function add    (x,y){
    return x+y;
           //반환값
}

   //인수(argument)
add(2,5);


// 함수는 변수에 할당할 수 있으며 객체다.
// 하지만 객체와 달리 호출이 가능하다
// 함수 리터럴
var f = function add() {

}

// 함수 선언문
function a(){}
// 함수 표현식
var b = function(){};
// Function 생성자 함수
var c = new Function();
// 화살표 함수
var d = () => {};

// 함수 선언문의 특징
// 함수 이름을 생략할 수 없다.
// function (){}

// 함수 리터럴은 이름 생략 가능
var k = function(x,y){ // 사실 자바스크립트 엔진이 function k() 같이 처리해주는거다.
    return x+y;
}

console.log(k(1,2));

// 함수 호이스팅
// 함수 m을 선언하기 전 이지만 에러가 나지 않는다.
console.log(m(1,7));
function m(a,b){
    return a+b;
}

// 함수 표현식은 에러
// 변수 호이스팅으로 먼저 선언되는거 아니야? 
// 아니다. 변수 호이스팅으로 l을 쓸수는 있지만 undefined로 초기화된다.
var l = function l(a,b){
    return a+b;
}
console.log(l(1,7));

// 근데 선언전에 못쓰는게 당연한게 아닌가
// 소스코드는 위에어 아래로 순차 실행된다가 규칙이니까
// 함수 표현식을 쓰는게 더 바람직하다고 볼 수 있다.

//참조에 의한 전달
function test(obj){
    obj.name = 'kim';
}

const obj = {name:'lee'};
test(obj);

// 원본이 훼손됐다!
console.log(obj);

// 즉시 실행 함수
(function () {
    console.log('hi');
}());

(function (a,b){
    console.log(a+b);
}(1,2));

