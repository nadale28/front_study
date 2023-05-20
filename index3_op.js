
// 연산자

// 산술 연산자
5*3
// 문자열 연결 연산자
'name '+'kim'
// 할당 연산자
color = 'red'
// 비교 연산자
5>2
// 논리 연산자
true && false
// 타입 연산자
typeof 'hi'

// 이항 산술 연산자
// +, -, *, /, %

// 단항 산술 연산자
// ++, --, +, -

// 할당 연산자
var x = 5;
x += 5;
x -= 5;
x *= 5;
x /= 5; // x = x/5
x %= 5; // x = x%5

// 비교 연산자
// x==y x,y의 값이 같음 (동등 비교)
// x===y x,y의 값과 타입이 같음 (일치 비교)
// x!=y x,y의 값이 다름 (부동등 비교)
// x!==y x,y의 값과 타입이 다름 (불일치 비교)

// == 동등비교 연산자는 암묵적 타입 변환을 통해 타입을 일치시키고 값을 비교한다

// NaN not a number
// 값이 숫자가 아니다
// 주로 이상한 연산시에 NaN 발생
console.log(Number.isNaN(1*'a')); //true
console.log(Number.isNaN(1*undefined)); //true
console.log(Number.isNaN(undefined)); //false... undefined는 NaN타입이 아니라 undefined 타입이다.