import { CiCircleRemove } from "react-icons/ci";
import {
  AuthorInfo,
  Avatar,
  FeedItemContainer,
  AuthorName,
  RemoveButton,
  SentBy,
  Message,
} from "./FeedItem.styles";
import { TFeedItem } from "../../../lib/types";

type FeedItemProps = {
  feedItem: TFeedItem;
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
        <Message>{feedItem.message}</Message>

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
