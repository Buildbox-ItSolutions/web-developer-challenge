import styled from "styled-components";

export const CardStyle = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  gap: 3.2rem;

  position: relative;
  padding-top: 2.4rem;
  height: max-content;

  @media (max-width: 48em) {
    padding-top: 4.3rem;
  }
`;

export const ImageBox = styled.div`
  height: max-content;

  img {
    min-height: 9rem;
    border-radius: 3.7rem;
  }

  @media (max-width: 48em) {
    width: 12rem;
    img {
      height: 12rem;
      border-radius: 2rem;
    }
  }

  @media (max-width: 17.5em) {
    width: 8rem;

    img {
      height: 8rem;
      border-radius: 2rem;
    }
  }
`;

export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  p {
    font-size: 1.6rem;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.gray};
  }

  @media (max-width: 48em) {
    p {
      font-size: 2rem;
    }
  }
  @media (max-width: 17.5em) {
    width: 16rem;
  }
`;

export const NameBox = styled.div`
  span {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.btn};
  }
  h2 {
    margin-top: 0.2rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.name};
    text-transform: capitalize;
  }

  @media (max-width: 48em) {
    span {
      font-size: 1.6rem;
    }
    h2 {
      margin-top: 0.6rem;
      font-size: 1.8rem;
    }
  }

  @media (max-width: 17.5em) {
    h2 {
      width: 8rem;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export const DeleteBox = styled.div`
  top: -1rem;
  right: -1rem;
  position: absolute;
  cursor: pointer;

  svg {
    width: 2.3rem;
    height: 2.3rem;
  }

  @media (max-width: 48em) {
    top: 0rem;
    right: 0rem;
    svg {
      width: 3rem;
      height: 3rem;
    }
  }
`;
