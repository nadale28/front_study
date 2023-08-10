// 일반 함수에서 this
// 메서드 호출에서 this
// 생성자 함수에서 this

// apply, call

const circle = {
    radius: 5,
    getDiameter(){
        return 2*circle.radius;
    }
};

function square(number) {
    //일반 함수 내부에서 this는 전역객체 window를 가리킨다.
    console.log(this); // window
    return number*number;
}
square(2);

const person = {
    name: 'Lee',
    getName() {
        //메서드 내부에서 this는 메서드를 호출한 객체를 가리킨다.
        console.log(this); // {name:'Lee', getName: f}
        return this.name;
    }
}
console.log(person.getName()); // Lee

function Person(name) {
    this.name = name;
    //생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    console.log(this);
}
const me = new Person('Lee');

const anotherPerson = {
    name: 'Kim'
};

anotherPerson.getName = person.getName;

console.log(anotherPerson.getName()); //kim

const getName = person.getName;
console.log(getName()); // window.name

// person.getName은 person이 getName을 호출한거기 때문에 this=person
// 일반함수 getName은 호출한 객체가 window

function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function() {
        return 2*this.radius;
    };
}

// 생성자 함수 내부의 this에는 생성자 함수가 (미래에) 생성할 인스턴스가 바인딩된다.
const circle1 = new Circle(5);
console.log(circle1.getDiameter()); // 10

function getThisBinding(a,b,c) {
    console.log(a,b,c);
    return this;
}

const thisArg = {a:1};

console.log(getThisBinding()); // window

console.log(getThisBinding.apply(thisArg, [1,2,3])); //{a:1}, 1 2 3
console.log(getThisBinding.call(thisArg, 1,2,3)); //{a:1}, 1 2 3
console.log(getThisBinding.bind(thisArg)(1,2,3));


const person2 = {
    name: 'Lee',
    foo(callback){
        setTimeout(callback.bind(this),100); //callback 함수로 this 전달
    }
}

person2.foo(function(){
    console.log(`hi ${this.name}`);
});