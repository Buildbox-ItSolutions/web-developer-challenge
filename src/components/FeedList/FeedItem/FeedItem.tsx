import { CiCircleRemove } from "react-icons/ci";
import {
  AuthorContent,
  Avatar,
  FeedItemContainer,
  Name,
  RemoveFeedItem,
  SendBy,
} from "./FeedItem.styles";

export default function FeedItem() {
  return (
    <FeedItemContainer>
      <Avatar
        src="https://png.pngtree.com/thumb_back/fw800/background/20190221/ourmid/pngtree-hand-painted-beautiful-outdoor-outskirts-image_32488.jpg"
        alt="avatar"
      />

      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quo
          explicabo qui voluptates, eaque distinctio dolor, ab facilis sequi
          eius aliquid recusandae consequuntur hic voluptas deserunt
        </p>

        <AuthorContent>
          <SendBy>Enviado por</SendBy>
          <Name>Manuela Oliveira</Name>
        </AuthorContent>
      </div>
      <RemoveFeedItem>
        <CiCircleRemove size={24} color="red" />
      </RemoveFeedItem>
    </FeedItemContainer>
  );
}
