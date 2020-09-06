import { routerMiddleware } from "connected-react-router";
import {
  applyMiddleware,
  compose,
  createStore,
  Store,
  CombinedState,
  AnyAction,
} from "redux";
import createSagaMiddleware from "redux-saga";
import history from "./history";
import rootReducer, { IRootReducer } from "./reducers";
import { rootSaga } from "./sagas";
import { IExtendedWindow } from "./types";

const configureStore = (): Store<CombinedState<IRootReducer>, AnyAction> => {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers =
    (window as IExtendedWindow).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer(history),
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
