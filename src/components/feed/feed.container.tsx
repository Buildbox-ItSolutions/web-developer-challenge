import CardUi from "../../ui/cards/card.ui.tsx";
import CardHeaderUi from "../../ui/cards/card.header.ui.tsx";
import CardContentUi from "../../ui/cards/card.content.ui.tsx";
import PictureTextContainerUi from "../../ui/containers/picture-text.container.ui.tsx";
import TextGroupUi from "../../ui/texts/text-group.ui.tsx";
import TextUi from "../../ui/texts/text.ui.tsx";
import SentGroupUi from "../../ui/texts/sent-group.ui.tsx";
import FeedContainerUi from "../../ui/containers/feed.container.ui.tsx";
import useData from "../../hooks/use-data.tsx";
import FeedPicture from "../pictures/feed.picture.tsx";
import IconButtonImgUi from "../../ui/img/icon-button.img.ui.tsx";

export default function FeedContainer() {
  const { data, deleteData } = useData()

  return (
    <FeedContainerUi>
      { data.map((data, index) => (
        <CardUi key={index}>
          <CardHeaderUi>
            <IconButtonImgUi src="/img/delete.svg" alt="delete" onClick={() => deleteData(index)}/>
          </CardHeaderUi>
          <CardContentUi>
            <PictureTextContainerUi>
              <FeedPicture imgUrl={data.imgUrl} />
              <TextGroupUi>
                <TextUi variant="message">
                  { data.message }
                </TextUi>
                <SentGroupUi>
                  <TextUi variant="sent">
                    Enviado por
                  </TextUi>
                  <TextUi variant="text">
                    { data.name }
                  </TextUi>
                </SentGroupUi>
              </TextGroupUi>
            </PictureTextContainerUi>
          </CardContentUi>
        </CardUi>
      )) }
    </FeedContainerUi>
  )
}