import { ReactNode } from "react";
import {
  DisplayBoxContainer,
  IconTrash,
  Imagem,
  TextSmall,
} from "../../styles/style";

interface DisplayBoxOutputProps {
  data: any;
}
export function DisplayBoxOutput({ data }: DisplayBoxOutputProps) {
  return (
    <DisplayBoxContainer>
      <div className="BoxTrash">
        <IconTrash src="delete.png" />
      </div>

      <div className="flexComent">
        <div className="ContainerImg">
          <Imagem src={data.img} />
        </div>
        <div className="boxComent">
          <p>
            {data.message}
          </p>
          <div className="sentTo">
            <TextSmall small>Enviado por</TextSmall>
            <h3>{data.user}</h3>
          </div>
        </div>
      </div>
    </DisplayBoxContainer>
  );
}
