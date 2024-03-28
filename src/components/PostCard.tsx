import styled from "styled-components";

interface IPostCard {
  id: number;
  name: string;
  message: string;
  image: string;
  onRemove: (id: number) => void;
}

const PostCard: React.FC<IPostCard> = ({
  id,
  name,
  message,
  image,
  onRemove,
}) => {
  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <StyledDiv>
      <StyledDivContainerIcon>
        <StyledA onClick={handleRemove}>X</StyledA>
      </StyledDivContainerIcon>

      <StyledDivContainer>
        <div>
          <StyledImg src={image} alt="" />
        </div>
        <StyledDivContainerText>
          <StyledPMessage>{message}</StyledPMessage>

          <p className="submittedby">Enviado por</p>
          <p className="username">{name}</p>
        </StyledDivContainerText>
      </StyledDivContainer>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  background-color: var(--rectangle-color);
  width: 51.6rem;
  border-radius: 0.3rem;
  border: solid 0.1rem var(--border-color);
  padding: 1.2rem 1.2rem 3.2rem 2.4rem;
  margin-bottom: 1.6rem;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const StyledDivContainerIcon = styled.div`
  display: flex;
  justify-content: right;
`;

const StyledDivContainer = styled.div`
  display: flex;

  @media (max-width: 480px) {
    margin-top: 2.5rem;
  }
`;

const StyledDivContainerText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3.2rem;

  .submittedby {
    font-weight: 500;
    font-size: 1.2rem;
    letter-spacing: 0.029rem;
    margin-top: 2.4rem;
    color: var(--auxiliar-gray);
  }

  .username {
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--warm-gray-two);
  }

  @media (max-width: 480px) {
    margin-left: 1.6rem;
  }
`;

const StyledA = styled.a`
  color: var(--icons-color);
  border: 0.1rem solid var(--icons-color);
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  padding: 0.6rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 8.8rem;
  height: 8.8rem;
  border-radius: 3.6rem;
`;

const StyledPMessage = styled.p`
  font-size: 1.6rem;
  color: var(--auxiliar-text-color);
  text-align: left;
  width: 34.8rem;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export { PostCard };
