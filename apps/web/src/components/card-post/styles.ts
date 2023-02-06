import { media } from '@bix/themes';
import styled from 'styled-components';

export const CardPostStyled = styled.div`
  width: 100%;
  height: 225px;
  position: relative;

  > img {
    cursor: pointer;
    width: 20px;
    position: absolute;
    top: 12px;
    right: 12px;
  }

  > div {
    width: inherit;
    height: inherit;

    border-radius: 3px;

    display: flex;
    align-items: flex-start;
    gap: 32px;
    padding: 56px 32px 20px;

    img {
      width: 88px;
      height: 88px;
      border-radius: 36px;
      object-fit: cover;
    }

    div {
      gap: 24px;

      > p {
        font-size: 1rem;
        word-break: break-all;
        color: ${({ theme }) => theme.textColorUp};
      }

      &,
      div {
        display: flex;
        flex-direction: column;
      }

      div {
        gap: 2px;

        p {
          font-size: 0.875rem;
          color: ${({ theme }) => theme.labelColorUp};
          width: 200px;
          white-space: nowrap;
          word-break: break-all;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        span {
          font-size: 0.75rem;
          color: ${({ theme }) => theme.labelColorDown};
        }
      }
    }
  }

  ${media.lessThan('sm')`
    height: fit-content;

    
    > div {
      padding: 40px 20px;
      flex-direction: column;
      align-items: center;
      gap: 20px;

      > div > p {
        text-align: center;
      }


      > div  {
        width: 100%;
        gap: 15px;

        div {
          width: 150px;
          margin-left: auto;
          align-items: flex-end;
        }
      }
    }
  `}
`;
