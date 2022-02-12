import * as C from "./styles";

import { AiOutlineCloseCircle } from "react-icons/ai";

import { iPosters } from "../../types/Posters";

type Props = {
  data: iPosters;
  delPost: () => void;
};

export const ListItem = ({ data, delPost }: Props) => {
  return (
    <C.Container>
      <C.ButtonDelete onClick={delPost}>
        <AiOutlineCloseCircle color="#ff5454" size={18} />
      </C.ButtonDelete>
      <C.Area>
        <C.Avatar src={data.avatar} />
        <C.TextArea>
          <C.StatusText>{data.text}</C.StatusText>
          <C.Description>
            <C.Text>Enviado por</C.Text>
            <C.UserName>{data.userName}</C.UserName>
          </C.Description>
        </C.TextArea>
      </C.Area>
    </C.Container>
  );
};
