import React, { useState, useContext } from 'react';
import { TodoContext } from './contexts/todoProvider';
import type { Todo } from './types/todo';


interface TodoState {
  state: Todo[];
  dispatch: React.Dispatch<any>;
}

const TodoComponent  = () => {
  // state, dispatch가 TodoContext.Provider에서 내려준 값임
  const { state, dispatch } = useContext(TodoContext) as TodoState;

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // dispatch를 사용하여 reducer에 action을 전달한다
    dispatch({ type: 'add', payload: { text: inputValue, done: false }
    });
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button>등록하기</button>

      {state.map((item) => 
        <div>{item.text}</div>
      )}
    </form>
  );
};

export default TodoComponent;
