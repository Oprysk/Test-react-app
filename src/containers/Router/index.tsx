import React from "react";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { History } from "history";
import { ROUTES } from "../../constants";
import { Root } from "../Root";

interface IRouterProps {
  history: History;
}

const Router: React.FC<IRouterProps> = (props: IRouterProps) => {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={ROUTES.ROOT}>
          <Root />
        </Route>
      </Switch>
    </ConnectedRouter>
  );
};

export default Router;
