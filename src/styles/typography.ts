import { css } from "styled-components";

const title = css`
    /* font-family: 'Bebas Neue', cursive; */
    font-family: 'Roboto', sans-serif;
`;

const text = css`
    font-family: 'Roboto', sans-serif;
`;

interface TypographyProps {
    [key: string]: any;
}

export const typography: TypographyProps = {}

typography.TitleXl = css`
    ${title}
    font-size: 2.2rem;
    line-height: 120%;
    font-weight: 400;
    letter-spacing: .1rem;

    @media (min-width: ${props => props.theme.breakpoints.md} ) {
        font-size: 2.5rem;
    }
`;

typography.TitleLg = css`
    ${title}
    font-size: 2.1rem;
    line-height: 140%;
    font-weight: 500;
`;

typography.TitleBig = css`
    ${title}
    font-size: 1.8rem;
    line-height: 140%;
    font-weight: 500 !;
`;

typography.TitleNormal = css`
    ${title}
    font-size: 1rem;
    line-height: 140%;
    font-weight: 500;
`;

typography.TextNormal = css`
    ${text}
    font-size: .87rem;
    line-height: 1.29;
    font-weight: 400;
    letter-spacing: normal;
    font-stretch: normal;
    font-style: normal;
    font-weight: 400;
`;

typography.TextSmall = css`
    ${text}
    font-size: .75rem;
    font-weight: 400;
    letter-spacing: normal;
    font-stretch: normal;
    font-style: normal;
    font-weight: 400;
`;


