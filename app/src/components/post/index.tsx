import { Image } from "../InputImage/styled";
import { Author, Close, Container, Contents, SentBy } from "./styled";

export interface IPost {
  img: string;
  message: string;
  author: string;
}

interface IProps extends IPost {
  onDelete: () => void;
}

const Post = (props: IProps) => {
  return (
    <Container className="d-flex flex-column flex-sm-row p-5 mb-3">
      <Image src={props.img} className="me-5" />
      <div className="d-flex flex-column">
        <Contents className="mb-2 mt-3 mt-sm-0">{props.message}</Contents>
        <SentBy>Enviado por</SentBy>
        <Author>{props.author}</Author>
      </div>
      <Close onClick={props.onDelete}/>
    </Container>
  )
}

export default Post;