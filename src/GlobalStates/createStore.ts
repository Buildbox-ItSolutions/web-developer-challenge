import { createStore, compose, applyMiddleware } from "redux";
import tron from "../Config/reactotron";

export default (reducers: any, middlewares: any) => {
  const enhancer =
    process.env.NODE_ENV === "development"
      ? compose(tron.createEnhancer!(), applyMiddleware(...middlewares))
      : applyMiddleware(...middlewares);
  return createStore(reducers, enhancer);
};
