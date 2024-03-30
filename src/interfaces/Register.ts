import { FileObjectType } from "../components/imageUpload";

export interface IRegister {
  id: number,
  image: FileObjectType,
  name: string,
  message: string
}