
// 프로토타입

// 상속
function Circle(radius) {
    this.radius = radius;
    this.getArea = function() {
        return Math.PI * this.radius ** 2;
    }
}

const circle1 = new Circle(1);
const circle2 = new Circle(2);

console.log(circle1.getArea === circle2.getArea); //false
console.log(circle1.getArea());
console.log(circle2.getArea());

// Circle 생성자 함수는
// 인스턴스를 생성할 때마다
// getArea 메서드를 중복 생성하고 모든 인스턴스가 중복 소유한다.

function Circle1(radius) {
    this.radius = radius;
}

Circle1.prototype.getArea = function() {
    return Math.PI * this.radius ** 2;
};

const circle3 = new Circle1(1);
const circle4 = new Circle1(2);

console.log(circle3.getArea === circle4.getArea); //true
console.log(circle3.getArea());
console.log(circle4.getArea());







// 모든 객체는 [[Prototype]] 이라는 내부객체를 갖는다.

// 모든 객체는 __proto__ 접근자 프로퍼티를 통해 자신의 프로토타입
// [[Prototype]]에 간접 접근할 수 있다.

// __proto__ 는 접근자 프로퍼티다.
const obj = {};
const parent = {x:1};

// getter
obj.__proto__;
// setter
obj.__proto__ = parent;
console.log(obj.x); // 1

// __proto__ 접근자 프로퍼티는 상속을 통해 사용된다.
// __proto__ 접근자 프로퍼티는 객체가 직접 소유하는 프로퍼티가 아니라
// Ojbect.prototype의 프로퍼티다.
// 모든 객체는 상속을 통해 Object.prototype.__proto__ 접근자 프로퍼티를 사용할 수 있다.

const person = {name:'Lee'};

console.log(person.hasOwnProperty('__proto__')); //false
console.log(Object.prototype.hasOwnProperty('__proto__')); //true
console.log(person.__proto__);
// __proto__는 Object.prototype의 프로퍼티이고
// 모든 객체는 이를 상속받는다.
console.log(person.__proto__ === Object.prototype);


// __proto__ 접근자 프로퍼티를 통해 프로토타입에 접근하는 이유
const parent1 = {};
const child = {};

// 아래와 같은 비정상적인 프로토타입 체인 생성을 막기위해
// __proto__ 접근자 프로퍼티를 사용하여 접근 교체하도록 구현한다.
child.__proto__ = parent1;
//parent1.__proto__ = child; //에러


// __proto__ 접근자 프로퍼티를 코드내에서 직접 사용하는 것은 권장하지 않는다.

// obj2는 프로토타입 체인의 종점이다. Object.__proto__ 를 상속받을 수 없다.
const obj2 = Object.create(null);

console.log(obj2.__proto__); //undefined
console.log(Object.getPrototypeOf(obj2)); //null

// 함수객체는 prototype 프로퍼티를 소유한다.
// 함수객체만이 소유하는 prototype 프로퍼티는
// 생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다.

(function(){}).hasOwnProperty('prototype'); // true

// 따라서 메서드 축약표현이나 화살표함수같은
// non-constructor 함수는 prototype 프로퍼티를 소유하지 않는다.
const Person = name => {
    this.name = name;
};

console.log(Person.hasOwnProperty('prototype')); // false








// __proto__ 와 prototype 프로퍼티는 결국 동일한 프로토타입을 가리킨다.
// 하지만 이들 프로퍼티를 사용하는 주체가 다르다.

function Person2(name){
    this.name = name;
}
const me = new Person2('Lee');

console.log(Person2.prototype === me.__proto__); // true

// me는 Person2의 constructor를 상속 받았다
console.log(me.constructor === Person2); // true
  

// 객체 리터럴의 경우에도 동일하다.
const a = {};
console.log(a.constructor === Object); // true

const b = function(){};
console.log(b.constructor === Function); // true




// 프로토타입 생성 시점

// 생성
console.log(Person3.prototype);

function Person3() {

}

const Person4 = name => {

}

console.log(Person4.prototype); //undefined




// 객체 리터럴에 의해 생성된 객체의 프로토타입

// obj3 객체는 추상연산 OrdinaryObjectCreate에 의해
// Object.prototype 을 프로토타입으로 갖게된다.
const obj3 = {x:1};

// Object.prototype의 constructor, hasOwnProperty 사용이 가능하다. 상속받았기 때문에
console.log(obj3.constructor === Object); //true
console.log(obj3.hasOwnProperty('x')); //true


// 생성자 함수에 의해 생성된 객체의 프로토타입
function Person5(name) {
    this.name = name;
}

// me3 객체는 Person5를 상속받는다
const me3 = new Person5('kim');

// 프로토타입 체인에 의해 Object.prototype 의 constructor, hasOwnProperty 사용이 가능하다.
console.log(me3.constructor === Object); //false
console.log(me3.constructor === Person5); //true
console.log(me3.hasOwnProperty('name')); //true

console.log(Object.getPrototypeOf(Person5.prototype)===Object.prototype); //true

Person5.prototype.sayHello = function() {
    console.log(`hi ${this.name}`)
}

me3.sayHello();


// 오버라이딩과 프로퍼티 섀도잉
const Person6 = (function(){
    function Person6(name) {
        this.name = name;
    }

    Person6.prototype.sayHello = function() {
        console.log(`hi ${this.name}`);
    };

    return Person6;
}());

const me4 = new Person6('Lee');
me4.sayHello(); // hi

// 오버라이딩
me4.sayHello = function() {
    console.log(`bye ${this.name}`);
}
// Person6의 sayHello는 가려진다. 프로퍼티 섀도잉
me4.sayHello(); // bye

delete me4.sayHello;

me4.sayHello(); // hi

// 프로토타입 프로퍼티를 변경 또는 삭제하려면 프로토타입에 직접 접근해야한다
delete Person6.prototype.sayHello;
//me4.sayHello(); // error


const parent2 = {
    sayHello() {
        console.log(`parent ${this.name}`);
    }
}
// 프로토타입 교체
Object.setPrototypeOf(me4, parent2);

me4.sayHello();

// parent2에는 생성자가 없으므로 me4의 생성자는 Object가 된다.
console.log(me4.constructor);

// instanceof
const me5 = new Person6();
//Object.setPrototypeOf(me4, Person5);
// 프로토타입 체인상에 존재
console.log(me5 instanceof Object); // true
console.log(me5 instanceof Person6); // true

Object.setPrototypeOf(me5, Person5.prototype);
console.log(me5 instanceof Person5); // 


const myProto = {x:10};

// __proto__를 통한 직접 상속
const obj5 = {
    y: 20,
    __proto__ : myProto
};

console.log(obj5.x, obj5.y);



function Person7(name) {
    this.name = name;
}

// 프로토타입 메서드
Person7.prototype.sayHello = function() {
    console.log(`hi ${this.name}`);
}

// 정적 프로퍼티
Person7.staticProp = 'static Prop';

Person7.staticMethod = function() {
    console.log('staticMethod');
};

const me6 = Person7('Lee');

Person7.staticMethod();
// 에러
// me6.staticMethod();

// 프로퍼티 존재 확인

const Person8 = {
    name: 'Lee',
    address: 'Seoul'
}

console.log('name' in Person8); //true
// 프로토타입 체인
console.log('toString' in Person8); //true

console.log(Person8.hasOwnProperty('name')); //true
// hasOwnProperty는 상속받은 프로퍼티는 false
console.log(Person8.hasOwnProperty('toString')); //false

// toString은 열거되지 않는다.
for (const key in Person8){
    console.log(key);
}

console.log(Object.getOwnPropertyDescriptor(Object.prototype,'toString')); //enumerable: false

// 상속받은거 제외하고 자신의 프로퍼티만 열거

// keys
console.log(Object.keys(Person8)); //[ 'name', 'address' ]
// values
console.log(Object.values(Person8)); //[ 'Lee', 'Seoul' ]
// key,value
console.log(Object.entries(Person8));












