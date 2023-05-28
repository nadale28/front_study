
// 일급 객체

// 무명의 리터럴로 생성할 수 있다. 즉 런타임에 생성이 가능
// 변수나 자료구조(객체,배열 등)에 저장할 수 있다.
// 함수의 매개변수에 전달할 수 있다.
// 함수의 반환값으로 사용할 수 있다.

// 무명의 리터럴로 생성할 수 있다. 즉 런타임에 생성이 가능
const increase = function(num) {
    return ++num;
};

const decrease = function(num) {
    return --num;
};

// 변수나 자료구조(객체,배열 등)에 저장할 수 있다.
const auxs = {increase, decrease};

// 함수의 매개변수에 전달할 수 있다.
// 함수의 반환값으로 사용할 수 있다.
function makeCounter(aux) {
    let num = 0;
    return function() {
        num = aux(num);
        return num;
    }
}

// arguments 객체는 매개변수 개수를 확정할 수 없는
// 가변 인자 함수를 구현할 때 유용하다
function multiply(x,y) {
    const iterator = arguments[Symbol.iterator]();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
}

multiply(2,3);


function sum() {
    // 배열로 변환
    const array = Array.prototype.slice.call(arguments);
    return array.reduce(function (pre, cur){
        return pre + cur;
    },0);
}

console.log(sum(1,2));
console.log(sum(1,2,3,4));

// ES6 부터는 Rest parameter를 사용할 수 있다.
function sum(...args){
    return args.reduce((pre,cur)=>pre+cur, 0);
}
console.log(sum(1,2));
console.log(sum(1,2,3,4));

// length
// 함수를 정의할 때 선언한 매개변수의 개수

function bz(x,y){}

console.log(bz.length); //2

// name
// 함수 이름

console.log(bz.name); //2