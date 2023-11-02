import { createGlobalStyle } from "styled-components";
import TodoTemplateBlock from "./components/TodoTemplate";
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
        <TodoTemplateBlock />
      </div>
    </>
  );
}

export default App;
