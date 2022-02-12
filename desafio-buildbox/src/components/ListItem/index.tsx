import * as C from "./styles";

import { AiOutlineCloseCircle } from "react-icons/ai";

import { iPosters } from "../../types/Posters";

type Props = {
  data: iPosters;
};

export const ListItem = ({ data }: Props) => {
  return (
    <C.Container>
      <C.ButtonDelete>
        <AiOutlineCloseCircle color="#f00" size={18} />
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
