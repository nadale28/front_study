
var x = 2;
var x = 3;
console.log(x);

// let,const는 중복 선언 불가
let a = 0;
//let a = 1; 

console.log(y);
var y = 1;

// 변수 호이스팅 불가한 것 처럼 보인다.
// console.log(b);
let b = 1;

let c = 0;
{
    // 변수 호이스팅 때문에 에러 발생
    //console.log(c);
    let c = 1;
}

// 전역 변수

// 브라우저에서 전역변수 x는 window 객체에 포함된다
//console.log(window.x); 

// let 키워드로 선언한 변수는 window의 프로퍼티가 아니다. undefined
//console.log(window.a); 

// 상수
const TAX_RATE = 0.1;

