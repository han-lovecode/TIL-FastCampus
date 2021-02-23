import { fetchTodos, postTodo } from "../api/todos";

// Action type 작성
// 1. todos 불러오기 Action (PENDING, SUCCESS, FAILURE 3개)
// 2. todo 추가 Action (PENDING, SUCCESS, FAILURE 3개)

// Action 생성자 작성 (todos 관련 api는 Q8/api/todos.js를 참고해주세요.)
// 1. todos 불러오기 Action 생성자 (saga 사용 시 제너레이터 추가 작성)
// 2. todo 추가 Action 생성자 (saga 사용 시 제너레이터 추가 작성)

// pending일 때 state는 { loading: true, data: null, error: null }
// success일 때 state는 { loading: false, data: api 응답 결과(배열), error: null }
// failure일 때 state는 { loading: false, data: null, error: api 응답 결과(객체) }

// initial state
const initialState = {
  loading: false,
  data: null,
  error: null
};

// todos 리듀서 작성
export default function todos(state = initialState, action) {}
