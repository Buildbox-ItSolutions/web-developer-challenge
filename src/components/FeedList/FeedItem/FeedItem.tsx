import { CiCircleRemove } from "react-icons/ci";
import {
  AuthorContent,
  Avatar,
  FeedItemContainer,
  Name,
  RemoveFeedItemButton,
  SendBy,
} from "./FeedItem.styles";

type FeedItemProps = {
  feedItem: {
    id: number;
    imgUrl: string;
    description: string;
    name: string;
  };
  handleRemoveItem: (id: number) => void;
};

export default function FeedItem({
  feedItem,
  handleRemoveItem,
}: FeedItemProps) {
  return (
    <FeedItemContainer>
      <Avatar src={feedItem.imgUrl} alt="avatar" />

      <div>
        <p>{feedItem.description}</p>

        <AuthorContent>
          <SendBy>Enviado por</SendBy>
          <Name>{feedItem.name}</Name>
        </AuthorContent>
      </div>
      <RemoveFeedItemButton>
        <CiCircleRemove
          size={24}
          color="red"
          onClick={() => handleRemoveItem(feedItem.id)}
        />
      </RemoveFeedItemButton>
    </FeedItemContainer>
  );
}
