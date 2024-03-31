import { IRegister } from "../../interfaces/Register";
import Photo from "../photo/Photo";
import * as S from "./styles";
import DeleteIcon from "../../assets/img/delete.svg";

interface Props {
  registerList: IRegister[];
  handleDelete(id: number): void;
}
const List = ({ registerList, handleDelete }: Props) => {
  return (
    <S.ListWrapper>
      {registerList.length > 0 ? (
        <>
          <p>Feed</p>
          {registerList.map((register) => (
            <S.PostItem>
              <S.Excluir onClick={() => handleDelete(register.id)}>
                <img src={DeleteIcon} />
              </S.Excluir>
              <S.Conteudo>
                <Photo image={register.image.dataUrl} />
                <div>
                  <S.Mensagem>{register.message}</S.Mensagem>
                  <S.NomeWrapper>
                    <S.NomeLabel>Enviado por</S.NomeLabel>
                    <S.Nome>{register.name}</S.Nome>
                  </S.NomeWrapper>
                </div>
              </S.Conteudo>
            </S.PostItem>
          ))}
        </>
      ) : (
        <p>Não há feed(s) registrado(s)!</p>
      )}
    </S.ListWrapper>
  );
};

export default List;
