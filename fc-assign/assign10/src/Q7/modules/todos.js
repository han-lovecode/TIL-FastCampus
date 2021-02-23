// 1. Action type 작성
// todo 추가 Action
// todo 상태(완료/미완료) 변경 Action

// 2. Action 생성자 작성
// todo 추가 Action 생성자
// todo 상태(완료/미완료) 변경 Action 생성자
let nextId = 4;

// initial state
const initialState = [
  {
    id: 1,
    text: "todo 1",
    done: false
  },
  {
    id: 2,
    text: "todo 2",
    done: false
  },
  {
    id: 3,
    text: "todo 3",
    done: false
  }
];

// 3. todos 리듀서 작성
export default function todos(state = initialState, action) {}
