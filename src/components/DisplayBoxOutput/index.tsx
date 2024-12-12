import { useContext } from "react";
import { ContextManager } from "../../contex";
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
  const { setComments, comments } = useContext(ContextManager);

  const deleteComment = () => {
   
   const  arr = comments.filter(function(item:any) {
      return item.id !== data.id
  });
    setComments(arr)
    
  }
  return (
    <DisplayBoxContainer>
      <div className="BoxTrash">
        <IconTrash src="delete.png" onClick={deleteComment}/>
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
