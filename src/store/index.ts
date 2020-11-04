import { createStore, compose } from "redux";
import rootReducer from "./modules/rootReducer";

const composeEnhancers =
  typeof window === "object" &&
  //@ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  process.env.NODE_ENV === "development"
    ? //@ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers();

const store = createStore(rootReducer, enhancer);

export default store;
