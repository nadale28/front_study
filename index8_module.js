
// 모듈 패턴

var Counter = (function() {
    //private 변수
    var num = 0;

    return {
        increase() {
            return ++num;
        },
        decrease() {
            return --num;
        }
    }
}());

console.log(Counter.num); //undefined
console.log(Counter.increase()); 
console.log(Counter.increase()); 
console.log(Counter.decrease()); 
console.log(Counter.decrease()); 


// ES6 모듈
// ES6 모듈을 사용하면 전역 변수를 사용 x
// 파일 자체의 독자적인 모듈 스코프 제공