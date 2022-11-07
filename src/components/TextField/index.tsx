import { PropTextField } from "./interface";
import { TextFiledContainer } from "./styles";

function TextField({ rows, cols, name, onChange, value }: PropTextField) {
  return (
    <TextFiledContainer
      rows={rows}
      cols={cols}
      name={name}
      onChange={onChange}
      value={value}
      data-cy="input-textfield"
    />
  );
}

export default TextField;
