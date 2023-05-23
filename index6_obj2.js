//원시값과 객체의 비교

const v = [1,2];
const c = v;

c[1] = 5;

// 객체의 복사
// c[1]의 값을 바꾸면 v 까지 변경된다.
// 두 객체가 같은 값을 참조하고 있다.
// 이를 얕은 복사라 한다. 
console.log(v);
console.log(c);

const a = {x : 1};
const b = a;
a.x = 5;
console.log(a);
console.log(b);

// 스프레드 문법을 사용하면 같은 참조값을 바라보고 있지않다.
// 그럼 이건 깊은복사일까?
// 스프레드 문법은 다차원 배열에는 적합하지 않다.
// 1 depth 만 복사하기 때문에
// 1 depth 에 한해서만 깊은 복사라 할 수 있다.
const f = {...a};
a.x = 10;

console.log(a);
console.log(f);


