import { useContext } from "react";
import { DashContext } from "../../context/DashboardContext";
import { PropsDashContext } from "../../context/interfaces";
import ImageDesconhecido from "../../shared/assets/desconhecido.jpg";
import CardMessage from "../CardMessage";

function FeedComponent() {
  const { messages } = useContext(DashContext) as PropsDashContext;

  return (
    <div>
      {messages.length > 0 &&
        messages.map(({ description, image, name, id }) => (
          <CardMessage
            description={description}
            image={image ?? ImageDesconhecido}
            name={name}
            id={id}
            key={id}
          />
        ))}
    </div>
  );
}

export default FeedComponent;
