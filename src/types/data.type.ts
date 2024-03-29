import { z } from "zod";
import dataSchema from "../schema/data.schema.ts";

type DataType = z.infer<typeof dataSchema>;

export default DataType;