
// 데이터 타입

// 원시타입
// 숫자, 문자역, 불리언, undefined, null, 심벌(ES6)

// 객체 타입
// 객체, 함수, 배열

// 자바스크립트의 숫자 타입은
// 정수만을 위한 타입이 없다
// 모든 수를 실수로 처리
console.log(1 === 1.0); //true

// 문자열
var string;
string = 'a';
string = "a";
string = `a`; // 백틱

// 템플릿 리터럴
var template = `Template literal`;
console.log(template);

// 일반 문자열에서는 개행이 불가능
//template = 'dkdk
//dkdf';

// 템플릿 리터럴에서는 가능
template = `dkdk
zz`;

// 표현식 삽입도 간단하다
var first = 'Ung-mo';
var last = 'lee';
console.log(`My name is ${first} ${last}`);


// 심벌
var key = Symbol('key');
console.log(typeof key); //symbol

// 자바스크립트의 변수는 선언이 아닌 할당에 의해 타입이 결정
// 타입 추론
// 그리고 재할당에 의해 타입은 동적으로 변할 수 있다.
// 따라서 유연성은 높지만 신뢰성은 낮다
