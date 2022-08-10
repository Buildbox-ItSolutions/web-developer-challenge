import Remove from "../../assets/Remove.svg";
import { IPost } from "../../pages/Dashboard";
import { Container } from "./styles";

export const Post = ({ message, name, photo }: IPost) => {
  return (
    <Container>
      <div className="content">
        <img src={photo} />
        <div className="description">
          <p>{message}</p>
          <div>
            <span>Enviada por</span>
            <p>{name}</p>
          </div>
        </div>
      </div>
      <div className="align-icon">
        <img className="remove-icon" src={Remove} />
      </div>
    </Container>
  );
};
