import CoinPage from "./components/CoinPage";
import Router from "./Router";
import { MemoProvider } from "./contexts/memo";

function App() {
  return (
    <div className="App">
      <CoinPage>
        <MemoProvider>
          <Router />
        </MemoProvider>
      </CoinPage>
    </div>
  );
}

export default App;
