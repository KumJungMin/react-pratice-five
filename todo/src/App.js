import CoinPage from "./components/CoinPage";
import CoinHeader from "./components/CoinHeader";
import CoinList from "./components/CoinList";

function App() {
  return (
    <div className="App">
      <CoinPage>
        <CoinHeader />
        <CoinList />
      </CoinPage>
    </div>
  );
}

export default App;
