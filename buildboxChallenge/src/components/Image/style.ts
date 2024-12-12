import styled from "styled-components";

interface ImageProps {
    behavior?: string;
}

export const ImageStyle = styled.div<ImageProps>`
    height: 100%;
    width: 100%;

    img {
        height: 100%;
        width: 100%;
        object-fit: ${props => props.behavior};
    }
`;

ImageStyle.defaultProps = {
    behavior: "cover"
}

