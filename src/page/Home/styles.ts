import styled from 'styled-components';

export const Container = styled.main`

    margin-top: calc(93px + 2rem);
    text-align: center;

    h4{
        margin: 30px 0 8px;
        font-weight: 500;
        line-height: 1.29;
        letter-spacing: normal;
        text-align: left;
        color: var(--color-secondary);
    }
  
`;

export const CaixaBoxForm = styled.form`
    box-sizing: border-box;    
    padding: 0 1rem;
    height:403px;
    border-radius: 3px;
    border: solid 1px var(--border-grey);
    background-color: var(--background-card);

    div > input , textarea{
        border-radius: .5rem;
        background-color: var(--background-box);
        padding: .6rem;
        color: var(--text-primary);
        font-family: var(--font-primary);
        font-size: .9rem;
    }

    div > input{
        height: 40px;
        margin-bottom: .5rem;
    }

    textarea{
        resize: none;
        height: 80px;
    }

   

`;


export const Figure = styled.div`

margin: 1rem auto;
height: 5.5rem;
width: 5.5rem;
object-fit: contain;
border: solid 1px #4b4b4b;
border-radius: 36px;    
background-color: rgba(75, 75, 75, 0);

    label{
        display: flex;
        align-items: center;
        height: 100%;
        place-content: space-around;
        cursor: pointer;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 30px;    
        }
    }

    input{
         display: none;
     }


`;

export const GroupButtons = styled.div`
    margin-top: 2rem;
    display: flex;
    float: right;
    width: 50%;

    button{
        background: none;
        color: var(--text-button);
        padding: 1rem;
        text-decoration: underline;
        cursor: pointer;
        
        &:nth-child(2){
            text-decoration: none;
            border-radius: .5rem;
            color: var(--text-button-second);
            background-color: var(--background-box);
            font-weight: bold;

        }
    }

    @media (max-width: 40rem){
        width: 100%;
        float: initial;
        
    }
 
`;

export const Feed = styled.section`

    div+ div{
            margin-top: 1rem;
        }
`;


