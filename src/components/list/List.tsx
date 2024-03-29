import { IRegister } from "../../interfaces/Register";

interface Props {
  registerList: IRegister[];
}
const List = ({ registerList }: Props) => {
  return (
    <>
      {registerList.length > 0 ? (
        registerList.map((register) => (
          <div key="register.id">
            <div>
              <p>Feed</p>
              <div>
                <p>Foto</p>
              </div>
              <p>X</p>
              <p>{register.message}</p>
            </div>
            <p>Enviado por</p>
            <p>{register.name}</p>
          </div>
        ))
      ) : (
        <p>Não há feed(s) registrados!</p>
      )}
    </>
  );
};

export default List;
