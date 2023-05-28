
// 생성자 함수에 의한 객체 생성

const person = new Object();

person.name = 'Lee';
person.sayHello = function() {
    console.log(`hi ${this.name}`);
};

console.log(person);

person.sayHello();

// 객체 리터럴의 경우 비효율적으로 동일한 프로퍼티를 갖는 객체를 여러개 생성하고 있다.
const circle1 = {
    radius: 5,
    getDiameter(){
        return 2*this.radius;
    }
}

const circle2 = {
    radius: 10,
    getDiameter(){
        return 2*this.radius;
    }
}

function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function(){
        return 2*this.radius;
    };
    // 암묵적으로 this 가 반환된다.
}

// 이렇게 재사용을 할 수 있다.
const circle3 = new Circle(5);
const circle4 = new Circle(10);

console.log(circle3);

// 내부메서드 [[Call]], [[Construct]]
// 일반 객체와 달리 함수는 호출이 가능하다.

function foo() {}

// [[Call]]
foo();

// [[Construct]]
new foo();

// construct : 함수선언문, 함수표현식, 클래스
// non-construct : ES6 메서드 축약 표현, 화살표 함수

// 메서드 축약 표현
const obj = {
    x() {}
}
// new obj.x(); // 에러

// 생성자 함수는 파스칼 케이스... 첫문자를 대문자로 사용한다.

function Circle(radius) {
    if(!new.target){ //생성자로 호출되지 않은 경우
        return new Circle(radius);
    }
    this.radius = radius;
    this.getDiameter = function(){
        return 2*this.radius;
    };
}

const circle = Circle(5);
console.log(circle.getDiameter());



