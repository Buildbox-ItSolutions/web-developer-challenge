import dataContext from "../context/data.context.ts";
import { PropsWithChildren, useCallback, useState } from "react";
import DataType from "../types/data.type.ts";

export default function DataProvider({ children }: PropsWithChildren) {
  const [data, setData] = useState<Array<DataType>>([])

  const addData = useCallback((newData: DataType) => {
    setData((prevData) => [...prevData, newData])
  }, [])

  const deleteData = useCallback((index: number) => {
    setData((prevData) => prevData.filter((_, i) => i !== index))
  }, [])

  const value = {
    data,
    addData,
    deleteData
  }

  return <dataContext.Provider value={ value }>{ children }</dataContext.Provider>
}