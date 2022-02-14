import styled from "styled-components";
import { typography } from "../../styles/typography";

export const SingleStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 2rem;

    .single-container {
        width: 80%;
        overflow: hidden;
        background-color: ${props => props.theme.colors.secondary};
        padding: .1rem;
        margin-bottom: 2rem;

        &__image {	
            height: 25vh;
        }

        &__info {
            background-color: ${props => props.theme.colors.secondaryAlt};
            padding: 2rem 0;
            

            & > * {
                padding-left: 1.75rem;
                padding-right: 1.75rem;
            }

            &-title {
                color: ${props => props.theme.colors.neutral};
                ${typography.TitleBig}
                margin-top: .75rem;
                margin-bottom: 1rem;
            }

            &-subtitle {
                color: ${props => props.theme.colors.neutralAlt};
                ${typography.TextNormal}
                margin-bottom: .75rem;
            }

            &-author {
                color: ${props => props.theme.colors.neutralAlt};
                ${typography.TextSmall}
            }
        }

        &__content {
            padding: 3rem 1.75rem 3rem;
        }

        &__text {
            color: ${props => props.theme.colors.neutral};
            ${typography.TextNormal}
            line-height: 1.5;
        }
    }

`;