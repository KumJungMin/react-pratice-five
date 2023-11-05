import Router from "./Router";
import CoinPage from "./components/CoinPage";
import { MemosProvider } from "./contexts/Comment";
function App() {
  // 코인 리스트별로, 닉네임과 내용을 작성하는 댓글 기능 연습
  return (
    <div className="App">
      <CoinPage>
        <MemosProvider>
          <Router />
        </MemosProvider>
      </CoinPage>
    </div>
  );
}

export default App;
