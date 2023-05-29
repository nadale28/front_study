
// strict mode

function foo() {
    'use strict'; // use strict를 사용하면 x is not defined 에러 발생
    // 암묵적 전역변수로 인식
    x = 10;
}

foo();


console.log(x); // 10

// 함수단위나 전역에 적용하는 것은 위험하다.
// 외부 라이브러리나 다른 함수에서는 strict mode를 사용하지 않을수도 있고
// 함수마다 use strict 선언하는 것도 귀찮기 때문

// 즉시 실행함수 단위로 사용
(function () {
    'use strict';
})

// 그냥... Es lint 를 사용한다.