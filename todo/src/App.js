import CoinPage from "./components/CoinPage";
import CoinHeader from "./components/CoinHeader";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <CoinPage>
        <CoinHeader />
        <Router />
      </CoinPage>
    </div>
  );
}

export default App;
