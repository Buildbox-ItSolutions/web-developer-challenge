'use client'

import styled from 'styled-components'

export const FeedSection = styled.section`
    width: 100%;   
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 41px;
    margin-bottom: 56px;
`

export const FeedWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 516px;
`

export const TitleWrapper = styled.div`
    width: 100%;
    text-align: left;
    text-transform: capitalize;
    color: var(--tertiaryGray);

    h2 {
        font-weight: 500;
        font-size: 1.4rem;  
    }      
`
