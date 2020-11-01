import styled from 'styled-components';
import { anime } from '../../global';

export const Container = styled.div`
    border-radius: 3px;
    background: var(--color-header);
    text-align: left;
    color: var(--color-secondary);

    button {
        width: 5%;
        float: right;
        background: none;
        margin: .7rem;
    }

    div h5{
        
        font-size: 12px;
        font-weight: bold;
        line-height: 1.33;
        letter-spacing: 0.29px;
        color: #5f5f5f;
        margin: 1.5rem 0 2px;
    }
    
    p{
        font-size: 1rem;
        word-break: break-all;
    }

    p:nth-child(2){
        font-size: 14px;
        line-height: 1.29;
    }

 
`;

export const Figure = styled.figure`
    width: 5.5rem;
    height: 5.5rem;
    object-fit: contain;
    border-radius: 36px;
`;

export const AnimeRight = styled.div`

    transform: translateY(-20px);
    opacity: 0;
    animation: .4s ${anime} forwards;
`;

export const Section = styled(AnimeRight)`
    padding: 3.5rem 1.5rem 2rem;
    display: grid;
    grid-template-columns: minmax(6rem, 6.5rem) 1fr;
    gap: .4rem;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 30px;    
    }

    @media(max-width: 40rem){
        padding: 3.5rem 0px 2rem 1.5rem;
        grid-template-columns:1fr;

        figure{
            justify-self: center;
        }
    }

`;
