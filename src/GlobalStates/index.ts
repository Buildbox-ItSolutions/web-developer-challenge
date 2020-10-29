import createSagaMonitor from "redux-saga";
import createStore from "./createStore";

import rootReducer from "./stores/rootReducer";
import rootSaga from "./stores/rootSaga";

import tron from "../Config/reactotron";

const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? tron.createSagaMonitor!()
    : undefined;
const sagaMiddleware = createSagaMonitor({ sagaMonitor: sagaMonitor });
const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, middlewares);

sagaMiddleware.run(rootSaga);

export { store };
