import styled from "styled-components";

export const PictureStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.8rem;
`;

export const Trash = styled.div`
  height: 2.2rem;
  transition: all 0.2s;
  cursor: pointer;
`;

export const PictureContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    cursor: pointer;
    height: 8.5rem;
    border-radius: 3.5rem;
    object-fit: cover;
  }

  @media (max-width: 48em) {
    height: 9rem;
    margin: 3rem 0;

    div img {
      height: 14rem;
    }
  }
`;

export const PictureBox = styled.div`
  padding: 3rem;
  border-radius: 3.5rem;
  object-fit: cover;
  cursor: pointer;
  height: 8.5rem;
  border: 1px solid ${({ theme }) => theme.colors.input_bg};
  transition: all 0.2s;

  :hover {
    background-color: ${({ theme }) => theme.colors.box_border};
  }

  @media (max-width: 48em) {
    height: max-content;
    padding: 5rem;
  }
`;

export const Erro = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.error};

  @media (max-width: 48em) {
    font-size: 1.5rem;
  }
`;
