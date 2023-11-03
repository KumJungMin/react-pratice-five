import { BrowserRouter, Route, Switch } from "react-router-dom";
import CoinInfo from "./routes/CoinInfo";
import CoinList from "./routes/CoinList";

interface IRouterProps {}

// Route는 URL을 가져와서 해당하는 컴포넌트를 렌더링한다.
// Switch는 한 번에 하나의 Route만 렌더링하도록 도와준다.
function Router({}: IRouterProps) {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/:coinId"
        >
          <CoinInfo />
        </Route>
        <CoinList />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
