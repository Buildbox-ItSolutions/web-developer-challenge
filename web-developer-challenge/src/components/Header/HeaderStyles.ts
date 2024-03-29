"use client"
import styled from 'styled-components'

export const Container = styled.div`
    position: fixed; /* torna o componente fixo */
    top: 0; /* fixa o componente no topo */
    left: 0; /* fixa o componente à esquerda */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    width: 100%;
    height: 70px;
    background-color: #2B2B2B;
`;