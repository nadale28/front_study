
// 프로퍼티 어트리뷰트

const o = {};
// 모든 객체는 [[Prototype]] 라는 내부슬롯을 갖는다.

// 직접 접근할 수는 없다.
// o.[[Prototype]];
console.log(o.__proto__);


// 자바스크립트 엔진은 프로퍼티를 생성할 때 
// 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다.

// 내부슬롯 [[Value]], [[Writable]], [[Enumerable]], [[Configurable]]

const person = {
    name: 'Lee'
};

// 프로퍼티 디스크립터 객체
console.log(Object.getOwnPropertyDescriptor(person, 'name'));

person.age = 20;

console.log(Object.getOwnPropertyDescriptors(person));

// 프로퍼티는 데이터 프로퍼티와 접근자 프로퍼티로 구분
// 위의 name, age가 데이터 프로퍼티에 해당

// 접근자 프로퍼티
// 자체적으로는 값을 갖지 않고 
// 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수로 구성
// [[Get]], [[Set]], [[Enumerable]], [[Configurable]]

const person2 = {
    firstName : 'Ungmo',
    lastName : 'Lee',
    get fullName() {
        return `${this.firstName} ${this.lastName}` 
    },
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
}

let descriptor = Object.getOwnPropertyDescriptor(person2, 'firstName');
console.log(descriptor);

descriptor = Object.getOwnPropertyDescriptor(person2, 'fullName');
console.log(descriptor);

// 1. 프로퍼티 키가 유효한지 확인
// 2. 프로토타입 체인에서 프로퍼티 검색
// 3. fullName 프로퍼티가 데이터 프로퍼티인지 접근자 프로퍼티인지 확인
// 4. getter 호출
console.log(person2.fullName);


// 프로퍼티 정의
const person3 = {};

Object.defineProperty(person3, 'firstName', {
    value: 'Ungmo',
    writable: true,
    enumerable: true,
    configurable: true
})

// 나머지는 지정안해서 기본값 false로 세팅
Object.defineProperty(person3, 'lastName', {
    value: 'Lee',
})

descriptor = Object.getOwnPropertyDescriptor(person3, 'firstName');
console.log(descriptor);

descriptor = Object.getOwnPropertyDescriptor(person3, 'lastName');
console.log(descriptor);

Object.defineProperty(person3, 'fullName', {
    get () {
        return `${this.firstName} ${this.lastName}` 
    },
    set (name) {
        [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable: true,
    configurable: true
});

descriptor = Object.getOwnPropertyDescriptor(person3, 'fullName');
console.log(descriptor);

// 객체 변경 방지

// 확장 금지 : 추가 x
// 밀봉 : 추가, 삭제 x
// 동결 : 추가, 삭제, 쓰기, 재정의 x

const person4 = {
    name: 'Lee'
};

// 확장 가능
console.log(Object.isExtensible(person4)); //true

// 확장 금지
Object.preventExtensions(person4);

console.log(Object.isExtensible(person4)); //false
console.log(Object.getOwnPropertyDescriptors(person4));
person4.age = 20;
// age 추가가 안됐다.
console.log(person4);

// 삭제는 잘됐다
delete person4.name;
console.log(person4);



const person5 = {
    name: 'Lee'
};
// 밀봉여부
console.log(Object.isSealed(person5));  //false

Object.seal(person5);
console.log(Object.isSealed(person5));  //true

console.log(Object.getOwnPropertyDescriptors(person5)); // configurable: false

// 삭제가 안됐다.
delete person5.name;
console.log(person5);


// 동결은 readonly라고 보면 된다.
const person6 = {
    name: 'Lee'
};

// 동결여부
console.log(Object.isFrozen(person6));  //false

Object.freeze(person6);

console.log(Object.isFrozen(person6));  //true

console.log(Object.getOwnPropertyDescriptors(person6)); // configurable: false, writable: false

// name이 바뀌지 않는다.
person6.name = 'Kim';
console.log(person6);


// freeze 는 직속 프로퍼티만 변경이 방지된다.
const person7 = {
    name: 'Lee',
    address: {city:'Seoul'}
};
Object.freeze(person7);

console.log(Object.isFrozen(person7.address));  //false

function deepFreeze(target) {
    if(target && typeof target === 'object' && !Object.isFrozen(target)){
        Object.freeze(target);
        Object.keys(target).forEach(key=>deepFreeze(target[key]));
    }
    return target;
}

const person8 = {
    name: 'Lee',
    address: {city:'Seoul'}
};
deepFreeze(person8);
console.log(Object.isFrozen(person8.address));  //true
