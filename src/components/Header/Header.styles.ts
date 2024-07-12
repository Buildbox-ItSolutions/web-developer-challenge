import styled from "styled-components";

export const Header = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.header.backGroundColor.main}
`;

export const HeaderContent = styled.div`
    width: fit-content;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const HeaderTitle = styled.h1`
    margin: 0;
    color: ${props => props.theme.font.main};
    font-family: "Open Sans", "system-ui";
    letter-spacing: -2px;
`;

export const HeaderSubTitle = styled.h5`
    margin: 0;
    color: ${props => props.theme.font.secondary};
`;
