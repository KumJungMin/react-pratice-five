import { TodoProvider } from "./contexts/todoProvider";
import TodoComponent from "./Todo";

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <TodoComponent />
      </div>
    </TodoProvider>
  );
}

export default App;
