import styled from 'styled-components'

export const PostWrapper = styled.ul`
    width: 100%;
`

export const PostCards = styled.li`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--cardBg);        
    border: 1px solid var(--border);
    padding: 12px;
    box-sizing: border-box;
    margin-bottom: 16px;
`

export const DeleteButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
    
`

export const DeleteButton = styled.button`    
    cursor: pointer;
`

export const Posts = styled.div`
    display: flex;
    gap: 32px;
`

export const PostImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 88px;
    height: 88px;
    border-radius: 36px;       
    position: relative;
    overflow: hidden;
    margin-left: 12px;
`

export const PostInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    > p {
        &:first-child {
            font-size: 1.6rem;
            color: var(--primaryGray);
            margin-bottom: 24px;
            width: 310px;

            @media (max-width: 600px) {               
                min-width: 100px;
                max-width: 150px;               
            }
        }
    }

    > div {
      &:last-child {
        font-size: 1.6rem;
        color: var(--primaryGray);
        margin-bottom: 20px;
        max-width: 263px;

        > p {
            &:first-child {
                font-size: 1.2rem;
                color: var(--secondaryGray);
                margin-bottom: 2px;
                font-weight: 500;
            }

            &:last-child {
                font-size: 1.4rem;
                color: var(--tertiaryGray);
                text-transform: capitalize;
            }
        }
      }
    }
`
