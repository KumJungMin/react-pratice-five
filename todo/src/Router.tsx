import { BrowserRouter, Route, Switch } from "react-router-dom";
import CoinList from "./routes/CoinList";
import CoinDetail from "./routes/CoinDetail";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          component={CoinList}
        />
        <Route
          path="/coin/:id"
          component={CoinDetail}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
