import styled from "styled-components";

export const ImageDisplay = styled.div.attrs<{ $imageToDisplay: string }>(props => ({
    $imageToDisplay: props.$imageToDisplay
}))`
    width: 100px;
    height: 100px;
    border: 1px solid #494949;
    border-radius: 35%; 
    background-repeat: round;
    background-image: url(${props => props.$imageToDisplay});
    cursor: pointer;
`

export const DefaultImageDisplay = styled(ImageDisplay)`
    background-size: 100% 25%;
    background-repeat: no-repeat;
    background-position: center center;
`

export const Card = styled.div`
    background-color: #313131;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 600px;
    height: 350px;
    flex-direction: column
`;
