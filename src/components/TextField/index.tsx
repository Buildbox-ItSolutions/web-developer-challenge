import { PropTextField } from "./interface";
import { TextFiledContainer } from "./styles";

function TextField({ rows, cols }: PropTextField) {
  return <TextFiledContainer rows={rows} cols={cols}></TextFiledContainer>;
}

export default TextField;
