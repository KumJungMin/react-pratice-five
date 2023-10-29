import { BrowserRouter, Route, Switch } from "react-router-dom";
import Todos from "./routes/Todos";
import CompleteTodos from "./routes/CompleteTodos";

interface IRouterProps {}

function Router({}: IRouterProps) {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          component={Todos}
        />
        <Route
          path="/complete"
          exact
          component={CompleteTodos}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
