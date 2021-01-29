// etc_크롬 개발자 도구에서 표현식이 아닌 문은 언제나 undefined를 출력한다. 


// 6번 문제

const a = 'a';

if (a === 'a') {
  console.log(a);
}

{
  var foo = 'foo';
  console.log(foo);
}

console.log(foo);


function bar(){
var baz = 'baz';
console.log(baz);
console.log(foo);
}

bar();

// 답 : a / foo / foo / baz / foo

// function 밖에 있는 var 값을 
// function 안에서도 사용 가능

// 7번 문제


console.log(text);

var text = 'hello world';

// 답 : undefined - 선언부만 올라가니까,,, 'hello world' 는 호이스팅 되지 않는다.

// 9번

const year = 2021;

const lastName = 'kim';

console.log(year - lastName);

// 숫자에서 string을 뺐음, 숫자가 아닌 숫자값 NaN 이 반환됨

// 10번 

const number = 0;
const isActive = false;

console.log(number == isActive);
// 답 : true (0=false, false=false)

//11번

const firstName = 'Jin';
const lastName = 'Kim';

console.log(`${firstName}-${lastName}`);

// 답 :Jin-Kim (`사이에서 -도 그냥 문자열로 그대로 출력됨)

//12번

const result = 15 / 3;

if(result > 0) {
  console.log('양수');
} else if (result === 0) {
  console.log('0');
} else {
  console.log('음수')
}

// 답 : 양수

//13번

const n = 18;
const isMultipleOfThree = n % 3 === 0;
const isMultipleOfFive = n % 5 === 0;

if (isMultipleOfThree && isMultipleOfFive) {
  console.log('15의 배수');
} else {
  if (isMultipleOfThree) {
    console.log('3의 배수');
  } else if (isMultipleOfFive){ 
    console.log('5의 배수');
  }
}

// 답 : 3의 배수

//14 번

const n = 15 / 3; 
//5

console.log(n % 4 === 0 && '5의 배수 입니다.');

// false && ture
// 답 : false

// 15번

const age = 20;
const canDrink = age >= 20 ? true : false;

console.log(canDrink);

// 답 true

//16 번

const n = 15;

switch (n % 3) {
  case 0:
    console.log('3의 배수입니다.');
    break;

  default:
    console.log('3의 배수가 아닙니다.');
}

// 답 :3의 배수입니다.

// 17번
for (let i = 0; i < 5; i++) {
    console.log('Hi');
  }

// 닶 : 5

// 18번

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
// 답 0 2 4 6 8

// 19번
let n = 0;

while (n < 10) {
  console.log('n is less than 10');
  n += 1;
}

// 10번 반복됨

// 20번

greeting('Jin');

function greeting(name) {
  console.log(`Hi ${name}!`);
}

// 답 : Hi Jin!

// 21번

greeting('Jin');

var greeting = function(name) {
  console.log(`Hi ${name}!`);
};

// 답 : TypeError: greeting is not a function (선언부만 올라가니까 함수인지 모르게됨)

// 22번
function mutiply2(num) {
    return num * 2
  }

// 답 셋다 같은 결과값
// const multiply2 = (num) => { return num * 2; };
// const multiply2 = num => { return num * 2; };
// const multiply2 = num => num * 2;

// 23번

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  const person = new Person('Jin', 99);
  console.log(person.age);

// 답 99

// 24번
function Person(name) {
    this.name = name;
  }
  
  Person.prototype.sayHello = function(){
    console.log(`Hi! My name is ${this.name}.`);
  };
  
  const me = new Person('Jin', 99);
  me.sayHello();

// 답 : Hi! My name is Jin.


// 25번
class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName
    }
  
    get fullName(){
      return `${this.firstName} ${this.lastName}`;
    }
  
    sayHello(){
      console.log(`Hi! My name is ${this.fullName}`);
    }
  }
  
  
  const me = new Person('Jin', 'Kim');
  me.sayHello();

  // 답 : Hi! My name is Jin Kim

  // 26번
  class Animal {
    constructor(name) {
      this.name = name;
    }
  
      attack() {
        console.log('attack');
      }
  }
  
  class Lion extends Animal {
    constructor(name, color) {
      super(name);
      this.color = color;
    }
  
    attack(){
      console.log('attack!!');
    }
  }
  
  const lion = new Lion('Leo', 'white');
  lion.attack();

  // attack!!