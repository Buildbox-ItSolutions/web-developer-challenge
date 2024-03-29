import PictureContainerUi from "../../ui/containers/picture.container.ui.tsx";
import PictureImgUi from "../../ui/img/picture.img.ui.tsx";

type Props = {
  imgUrl: string;
}

export default function FeedPicture({ imgUrl }: Props) {

  return (
    <PictureContainerUi>
      <PictureImgUi src={ imgUrl } alt="image"/>
    </PictureContainerUi>
  )
}
