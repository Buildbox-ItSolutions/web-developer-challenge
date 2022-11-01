import { PropTextField } from "./interface";
import { TextFiledContainer } from "./styles";

function TextField({ rows, cols, name, onChange }: PropTextField) {
  return (
    <TextFiledContainer
      rows={rows}
      cols={cols}
      name={name}
      onChange={onChange}
    />
  );
}

export default TextField;
