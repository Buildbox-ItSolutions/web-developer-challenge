import { FeedCardContainer } from "./style";
import deletingImage from "../../assets/delete.svg";
import { useProvider } from "../../providers/Provider";

interface iFeedCard {
  photo: string;
  message: string;
  name: string;
}

export const FeedCard = ({ photo, message, name }: iFeedCard) => {
  const { messages, setMessages } = useProvider();
  console.log(messages);
  return (
    <FeedCardContainer>
      <div className="deletingContainer">
        <img
          src={deletingImage}
          alt="delete"
          onClick={() => {
            setMessages(messages.filter((item) => item.photo !== photo));
          }}
        />
      </div>
      <div className="photo">
        <img className="profilePhoto" src={photo} alt={name} />
      </div>
      <div className="message">
        <p>{message}</p>
        <div>Enviado por</div>
        <p className="name">{name}</p>
      </div>
    </FeedCardContainer>
  );
};
export default FeedCard;
