import { Container, ContainerBody, H5, TextContainer } from "./styles";
import logo from "../../assets/images/logo.svg";
import { XIcon } from "../Icons";

interface Props {
  children?: React.ReactNode;
}

const FeedCard: React.FC<Props> = () =>{
  return (
    <>
      <H5 className="feed">Feed</H5>
      <Container>
        <button
          type="button"
          onClick={() => { console.log('delete') }}
          className="delete-button">
          <XIcon />
        </button>
        <ContainerBody>
          <img src={logo} alt="post-image" />
          <TextContainer>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            <span>Enviado por:</span>
            <span>Michele oliveira</span>
          </TextContainer>
        </ContainerBody>
      </Container>
    </>
  )
}
FeedCard.displayName = 'FeedCard';
export type FeedCardProps = Props;
export default FeedCard;
