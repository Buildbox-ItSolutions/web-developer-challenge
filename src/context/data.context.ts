import { createContext } from "react";
import DataContextType from "../types/context/data.context.type.ts";

const dataContext = createContext<DataContextType>({} as DataContextType);

export default dataContext;