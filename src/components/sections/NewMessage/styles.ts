import styled from 'styled-components';


export const StyledNewMessageSection = styled.section`
    max-width: 900px;

    .inner{
        display: flex;
        justify-content: center;
    }
    
`

export const StyledBox = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-evenly;
    width: 516px;
    background-color: var(--box);
    border: var(--border);
    padding: 24px;

    & > * {
        margin-bottom: 10px;
    }

    input, textarea{
        width: 100%;
        padding: 12px 1.5rem;
        color: var(--input-text);
        font-size: var(--fz-sm);
        font-family: var(--font-sans);
        font-weight: 400;
        
        
        border-radius: 8px;

        border: 0;
        background-color: var(--textarea);
    }

    img{
        transition: var(--transition);

        &:hover{
            filter: brightness(0.8);
        }
    }
`
export const StyledProfile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 auto;

    width: 88px;
    height: 88px;
    border-radius: 36px;
    border: solid 1px #4b4b4b;
    background-color: rgba(75, 75, 75, 0);
    cursor: pointer;

    margin-bottom: 20px;

 

        img{
            width: 24px;
            height: 24px;
        }

        .ProfileImage{
            width: 88px;
            height: 88px;;
            border-radius: 36px;
        }

        
`


export const StyledImgContainer = styled.div`
    position: relative;
    width: 100%;

    margin: 0 auto;

`

export const StyledTrash = styled.img`
    position: absolute;
    top: 30%;
    left: 62%;

    cursor: pointer;

    transition: var(--transition);

    &:hover{
        filter: brightness(0.7);
    }
`


export const StyledButtonContainer = styled.div`
    display: flex;
    margin-top: 20px;

    button{
        ${({ theme }) => theme.mixins.btnDiscard};

        border-bottom: 1px solid var(--button);
    }


    button[type="submit"]{
        ${({ theme }) => theme.mixins.btnPublish};
        

        &:disabled{
            background-color: var(--button);
            color: var(--box);
            cursor: not-allowed;

            &:hover{
                filter: none;
            }
        }
    }
`