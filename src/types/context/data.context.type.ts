import DataType from "../data.type.ts";

type DataContextType = {
  data: Array<DataType>;
  addData: (data: DataType) => void;
  deleteData: (index: number) => void;
}

export default DataContextType;