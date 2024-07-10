import { useContext } from "react";
import dataContext from "../context/data.context.ts";
import DataContextException from "../exceptions/data.context.exception.ts";

export default function useData() {
  const context = useContext(dataContext);

  if (!context) {
    throw DataContextException.mustBeUsedWithinDataProvider();
  }

  return context;
}