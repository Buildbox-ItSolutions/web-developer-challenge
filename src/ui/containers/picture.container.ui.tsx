import styled from "styled-components";

interface PictureContainerUiProps {
  adding?: boolean;
}

const PictureContainerUi = styled.div<PictureContainerUiProps>`
    object-fit: contain;
    border-radius: 40%;
    border: solid 1px ${ ({ theme }) => theme.colors.greyishBrownThree };
    display: flex;
    justify-content: center;
    align-items: center;
    height: 88px;
    width: 88px;
    ${ ({ adding }) => adding && `cursor: pointer;` }
`;

export default PictureContainerUi;