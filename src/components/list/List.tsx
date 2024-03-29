import { IRegister } from "../../interfaces/Register";
import Photo from "../photo/Photo";
import { PostItem, Wrapper, WrapperContent, WrapperDell } from "./styles";
import DeleteIcon from "../../assets/img/delete.svg";

interface Props {
  registerList: IRegister[];
  handleDelete(id: number): void;
}
const List = ({ registerList, handleDelete }: Props) => {
  return (
    <Wrapper>
      {registerList.length > 0 ? (
        <>
          <p>Feed</p>
          {registerList.map((register) => (
            <PostItem key={register.id}>
              <WrapperDell
                onClick={() => {
                  handleDelete(register.id);
                }}
              >
                <img src={DeleteIcon} />
              </WrapperDell>
              <WrapperContent>
                <Photo />
                <div>
                  <p>{register.message}</p>
                  <div>
                    <p>Enviado por</p>
                    <p>{register.name}</p>
                  </div>
                </div>
              </WrapperContent>
            </PostItem>
          ))}
        </>
      ) : (
        <p>Não há feed(s) registrado(s)!</p>
      )}
    </Wrapper>
  );
};

export default List;
