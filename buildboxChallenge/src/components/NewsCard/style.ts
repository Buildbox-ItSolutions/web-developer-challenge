import styled from "styled-components";
import { typography } from "../../styles/typography";

export const CardWrap = styled.div`    
    min-height: 225px;
    width: 95%;
    /* max-width: 516px; */
    display: flex;
    justify-content: center;
    overflow: hidden;
    border: solid 1px #3b3b3b;
    margin: 8px 0 8px;
    cursor: pointer;
    background-color: ${props => props.theme.colors.secondary};

    .card {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 56px 24px 32px 0;

        &-image, &-info {
            height: 100%;
        }

        &-image {
            flex: 0 1 auto;

            &__wrap {
                padding-left: 2rem;
            }

            img {
                height: 88px;
                width: 88px;
                border-radius: 36px;
                overflow: hidden;
            }
        }

        &-info {
            flex: 2;

            &__content {
                margin: 0 12px 24px 32px;
                ${typography.TextNormal};
                color: ${props => props.theme.colors.neutralAlt};

            }

            &__content::first-letter {
                text-transform: capitalize;
            }

            &__footer {
                margin: 24px 32px 0;
            }

            &__text {
                ${typography.TextSmall};
                color: ${props => props.theme.colors.neutralAlt};
                text-transform: capitalize;
                margin-bottom: 3px;
            }

            &__author {
                ${typography.TextNormal};
                text-transform: capitalize;
                color: ${props => props.theme.colors.neutralAlt};
            }
        }
    }
`;
