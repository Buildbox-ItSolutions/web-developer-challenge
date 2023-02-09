import styled from "styled-components";
import DeleteIcon from "../../assets/delete-icon.svg";
import { IFeedCard } from "./FeedCard.interface";

const CardContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 88px 1fr;
  gap: 32px;
  padding: 56px 24px 32px;
  background-color: ${(props) => props.theme.gray500};
  border: 1px solid ${(props) => props.theme.gray300};

  .post-photo {
    width: 88px;
    height: 88px;
    border-radius: 40%;
    object-fit: cover;
  }

  @media (max-width: 640px) {
    .post-photo {
      justify-self: center;
    }

    & {
      grid-template-columns: 1fr;
      grid-template-rows: 88px 1fr;
    }
  }
`;

const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow-wrap: anywhere;

  & p:first-child {
    margin-bottom: 24px;
    line-height: 1.25;
    color: ${(props) => props.theme.text300};
    text-align: left;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
  }

  & p:nth-child(2) {
    color: ${(props) => props.theme.text600};
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: 0.29px;
  }
  & p:nth-child(3) {
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
  }
`;

const DeleteIconWrapper = styled.img`
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
  border-radius: 50%;
`;

const FeedCard: React.FC<IFeedCard> = ({ name, message, photo, onDelete }) => {
  return (
    <CardContainer>
      <img src={photo} className="post-photo" />
      <PostContent>
        <p>{message}</p>
        <p>Enviado por</p>
        <p>{name}</p>
      </PostContent>
      <DeleteIconWrapper
        src={DeleteIcon}
        onClick={onDelete}
        data-testid="remove-card-icon"
      />
    </CardContainer>
  );
};

export default FeedCard;
