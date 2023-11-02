import { createGlobalStyle } from "styled-components";
import TodoTemplateBlock from "./components/TodoTemplate";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { TodoProvider } from "./contexts/todoContext";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <TodoProvider>
        <GlobalStyle />
        <div className="App">
          {/* TodoTemplateBlock은 children을 받기에, 내부에 컴포넌트 지정 가능 */}
          <TodoTemplateBlock>
            <TodoHeader />
            <TodoList />
          </TodoTemplateBlock>
          <TodoCreate />
        </div>
      </TodoProvider>
    </>
  );
}

export default App;
