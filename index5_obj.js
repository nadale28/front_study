
//객체

//객체는 프로퍼티, 메서드로 구성될 수 있다.
var counter = {
    num: 0, //프로퍼티
    increase: function() { //메서드 (일반 함수와 구분하기 위해 메서드라 부른다.)
        this.num++;
    }
};

//프로퍼티 축약 표현
var x=1, y=2;
var obj = {x,y};

// 메서드 축약 표현
// 프로퍼티에 할당한 함수와는 다르게 동작한다.
const obj = {
    name: 'lee',
    sayHi() {
        console.log('hi');
    }
}