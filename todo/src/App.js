import { createGlobalStyle } from "styled-components";
import TodoTemplateBlock from "./components/TodoTemplate";
import TodoHeader from "./components/TodoHeader";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        {/* TodoTemplateBlock은 children을 받기에, 내부에 컴포넌트 지정 가능 */}
        <TodoTemplateBlock>
          <TodoHeader />
        </TodoTemplateBlock>
      </div>
    </>
  );
}

export default App;
