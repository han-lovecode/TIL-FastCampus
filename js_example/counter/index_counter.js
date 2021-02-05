const number = document.querySelector('#number');
// const increase = document.querySelector('#increase');
// const decrease = document.querySelector('#decrease');

// id없이 코드를 만들고 싶다면,

const buttons = document.querySelectorAll('button');
const [increase, decrease] = buttons;
// 비구조할당해준다. 이렇게도 가능가능

increase.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
};

decrease.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
}