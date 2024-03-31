import { CircleX } from "lucide-react";
import { Card } from "./styles";
interface Props {
  name: string;
  msg: string;
  img: string;
  onRemove: () => void;
}

const CardComponent = (props: Props) => {
  return (
    <Card>
      <header>
        <button onClick={props.onRemove} data-testid="remove-button">
          <CircleX />
        </button>
      </header>
      <main>
        <div>
          <img src={props.img} className="img" alt="" />
        </div>
        <div className="card-content">
          <p>{props.msg}</p>
          <div className="send-for">
            <span>Enviado por</span>
            <p>{props.name}</p>
          </div>
        </div>
      </main>
    </Card>
  );
};

export default CardComponent;
