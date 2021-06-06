import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageNotFound from "views/PageNotFound";
import Todo from "views/todo";
import Dashboard from "views/Dashboard/Dashboard";
import Expense from "views/Expense/Expense";
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/todo" component={Todo} />
        <Route exact path="/expense" component={Expense} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
