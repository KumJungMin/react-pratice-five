import CoinPage from "./components/CoinPage";
import CoinHeader from "./components/CoinHeader";
import Router from "./Router";
import { MemoProvider } from "./contexts/memo";

function App() {
  return (
    <div className="App">
      <CoinPage>
        <CoinHeader />
        <MemoProvider>
          <Router />
        </MemoProvider>
      </CoinPage>
    </div>
  );
}

export default App;
