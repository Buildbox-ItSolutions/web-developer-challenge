import styled from 'styled-components';

export const StyledMessageSection = styled.section`
    max-width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    .inner{
        max-width: 560px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        position: relative;


        h2{
            color: var(--sub-text);
            font-size: var(--fz-sm);
        }

    }
`

export const StyledMessage = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 3fr;
    grid-gap: 25px;
    grid-template-areas: 
        "a a a"
        "b c c"
        "b c c";


    margin-bottom: 30px;

    max-width: 516px;
    padding: 15px 24px 30px 24px;

    
    background-color: var(--box);
    border: var(--border);

    @media(max-width: 480px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const StyledPic = styled.div`
    grid-area: b;

    img{
        width: 88px;
        height: 88px;
        object-fit: contain;
        border-radius: 36px;
    }

`

export const StyledText = styled.div`

    grid-area: c;

    max-width: 360px;

    p{
        color: var(--text);
        font-size: var(--fz-md);
        margin: 0 0 25px 0;
    }

    h3{
        color: var(--button);
        font-size: var(--fz-xxs);
    }

    h2{
        color: var(--sub-text);
        font-size: var(--fz-sm);
    }

    @media(max-width: 480px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const StyledDelete = styled.div`
    grid-area: a;

    display: flex;
    justify-content: flex-end;


    img{
        width: 20px;
        height: 20px;
        cursor: pointer;

        transition: var(--transition);

        &:hover{
            filter: brightness(0.7);
        }
    }

    @media(max-width: 480px){
        align-self: flex-end;
    }
`