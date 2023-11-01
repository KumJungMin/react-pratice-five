import  { createContext, useReducer, ReactNode } from 'react';
import { todoReducer } from '../reducer/todo';
import type { Todo } from '../types/todo';

// 1. reducer 선언
// 이 reducer는 입력값을 추가하는 역할을 한다
const initialState = [
  {text: 'todo1', done: false},
];

// 2. context 선언
export const TodoContext = createContext({});



// 3. provider 선언
export const TodoProvider = ({ children }: { children: ReactNode }) => {
  // 3-1. useReducer를 사용하여 state와 dispatch를 가져온다
  const [state, dispatch] = useReducer(todoReducer, initialState) as [Todo[], React.Dispatch<any>];

  return (
    // 3-2. TodoContext.Provider를 사용하여 state와 dispatch를 내려준다
    // 이렇게 하면 TodoContext.Provider를 사용하는 곳에서 state와 dispatch를 사용할 수 있다
    <TodoContext.Provider value={{state, dispatch}}>
      {children}
    </TodoContext.Provider>
  )
};