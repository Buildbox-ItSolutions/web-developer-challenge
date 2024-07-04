import { CiCircleRemove } from "react-icons/ci";
import {
  AuthorInfo,
  Avatar,
  FeedItemContainer,
  AuthorName,
  RemoveButton,
  SentBy,
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

        <AuthorInfo>
          <SentBy>Enviado por</SentBy>
          <AuthorName>{feedItem.name}</AuthorName>
        </AuthorInfo>
      </div>
      <RemoveButton>
        <CiCircleRemove
          size={24}
          color="red"
          onClick={() => handleRemoveItem(feedItem.id)}
        />
      </RemoveButton>
    </FeedItemContainer>
  );
}
