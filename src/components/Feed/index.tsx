import { useContext } from "react";
import { DashContext } from "../../context/DashboardContext";
import { PropsDashContext } from "../../context/interfaces";
import ImageDesconhecido from "../../shared/assets/desconhecido.jpg";

function FeedComponent() {
  const { messages } = useContext(DashContext) as PropsDashContext;

  return (
    <div>
      {messages &&
        messages.map((item) => (
          <>
            <img
              src={item?.image ? item.image : ImageDesconhecido}
              alt="user"
            />
            <h1>{item.name}</h1>
          </>
        ))}
    </div>
  );
}

export default FeedComponent;
