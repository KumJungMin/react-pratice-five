import { useRecoilValue, useSetRecoilState } from "recoil";
import { TodoType, categoryState, todoSelector } from "../atoms";
import Todo from "../components/Todo";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function CompleteTodo() {
  const todos = useRecoilValue(todoSelector);
  const setCategory = useSetRecoilState(categoryState);

  // useEffect를 사용해 컴포넌트가 마운트 될 때 categoryState를 TodoType.DONE으로 변경한다.
  useEffect(() => {
    setCategory(TodoType.DONE);
  }, []);

  return (
    <div>
      <Link to={{ pathname: "/" }}>처음 화면</Link>
      {todos.map((todo) => {
        return (
          <Todo
            key={todo.id}
            todo={todo}
          />
        );
      })}
    </div>
  );
}

export default CompleteTodo;
