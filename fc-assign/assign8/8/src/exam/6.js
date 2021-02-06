/*
6. 클릭 이벤트 만들기 (10점)
번호가 매겨진 노란색 버튼을 클릭했을 때 빨간색으로 변하는 이벤트 함수를 만들어주세요.
빨간색으로 색상을 변경하는 스타일 코드는 red 클래스에 이미 작성되어 있으므로 해당 클래스를 컨트롤하는 코드를 작성해주시면 됩니다.
*/

const $menuList = document.querySelector(".menu-list");
const lists = document.querySelectorAll('li');
const RED = 'red';

$menuList.addEventListener("click", (e) => {
  // 코드 작성
  for (let i = 0; i < lists.length; i++) {
    if (lists[i] !== e.target){
      lists[i].onclick = lists[i].classList.remove(RED);        
    }  else {
      lists[i].onclick = lists[i].classList.add(RED);  
    }
 
}});