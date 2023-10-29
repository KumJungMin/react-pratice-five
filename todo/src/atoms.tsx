import { atom, selector } from "recoil";

export interface ITodo {
  id: number;
  text: string;
  type: string;
}

export enum TodoType {
  DOING = "doing",
  DONE = "done",
}

export const todoState = atom<ITodo[]>({
  key: "todoState",
  default: [],
});

export const categoryState = atom<TodoType>({
  key: "categoryState",
  default: TodoType.DOING,
});

// selector를 사용해 todoState를 가공해서 사용할 수 있다.
// 마치 vue의 computed와 비슷한 느낌
export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todos = get(todoState);
    const category = get(categoryState);

    return todos.filter((todo) => todo.type === category);
  },
});
