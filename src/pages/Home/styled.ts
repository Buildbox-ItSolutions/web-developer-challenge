import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 93px;
    padding: 24px auto 24px;
    background-color: #2b2b2b;
    border-bottom: 1px solid var(--header-border-color);
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    z-index: 1;

    img {
        width: 103px;
        height: 45px;
        object-fit: contain;
    }
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    padding: 0 10%;
    margin-top: 134px;
    @media screen and (min-width: 768px) {
        padding: 0 25%;
  	}
`

export const FeedSpan = styled.span`
    width: 100%;
    font-size: 14px;
    text-align: left;
    color: var(--name-color);
    margin-bottom: 8px;
`