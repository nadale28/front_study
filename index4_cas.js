
// 타입 변환과 단축 평가


// 암묵적 타입변환
// 개발자 의도와 상관없이 타입변환
var test = '10'+2; // '102'
if(1){} // 1->true
test = undefined+'';// 'undefined'

// 단축평가

// And 연산자는 마지막까지 true로 판단되는지 확인해야 하므로
'Cat' && 'Dog' // 'Dog'

// Or 연산자는 첫번째가 true라면 중단
'Cat' || 'Dog' // 'Cat'

var elem = null;
// 에러
// var value = elem.value; 

// elem이 null이나 undefined라면 false로 판단되어
// elem.value가 실행되지 않는다.
var value = elem && elem.value;

// str에 기본값을 설정하여 오류 발생 방지
function getStringLength(str) {
    str = str || '';
    return str.length;
}

function getStringLength2(str = '') {
    return str.length;
}

// 옵셔널 체이닝 연산자
// null인지 확인 후 우항의 프로퍼티 참조를 이어간다.
var elem = null;
var value = elem?.value;
console.log(elem);

// ''도 false로 판단되므로 의도한 결과 0 이 나오지 않는다.
var str='';
var length = str&&str.length;
console.log('length',length);

// 옵셔널 체이닝은 null,undefined인 경우에만 판단하므로 의도한대로 동작한다.
var length = str?.length;
console.log('length',length);

// undefined, null, NaN, 0, '' 은 모두 false로 판단된다

// null 병합 연산자
// 변수에 기본값을 설정할 때 유용하다.
var foo = null ?? 'default';
console.log(foo); //default;




