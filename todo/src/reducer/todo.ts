import type { Todo } from '../types/todo';

type ActionType = {
  type: string;
  payload: Todo;
}


export const todoReducer = (state: Todo[], action: ActionType): Todo[] => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    default:
      return state;
  }
}
