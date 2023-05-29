
// 빌트인 객체

// 호스트 객체
// 브라우저나 node.js에서 제공하는 객체

// 사용자 정의 객체
// 사용자가 직접 정의한 객체

// 표준 빌트인 객체
// Object, String, Number, Promise 등...
// ECMAScript 사양에 정의된 객체

const num = 1.5;

// 원시타입인 숫자가 래퍼 객체인 Number 객체로 변환된다.
console.log(num.toFixed()); // 2

// 래퍼 객체로 프로퍼티에 접근하거나 메서드를 호출한 후 , 다시 원시값으로 되돌린다.
console.log(typeof num, num); // 1.5



// 전역 객체

// 브라우저에서는 window, node.js에서는 global 을 전역객체로 사용한다.
// 이걸 통일하기위해 globalThis 사용


// encodeURI
const uri = 'http://example.com?name=이웅모&job=programmer';
const enc = encodeURI(uri);
console.log(enc);