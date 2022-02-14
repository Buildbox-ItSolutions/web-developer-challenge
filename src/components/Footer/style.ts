import styled from "styled-components";
import { typography } from "../../styles/typography";

export const FooterContainer = styled.footer`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem 0;
    background-color: ${props => props.theme.colors.secondary};

    .footer-container__wrap {
        display: flex;
        flex-direction: row;
        width: 80%;
    }

    @media (max-width: 1300px) {
        .footer-container__wrap {
            flex-direction: column;
        }

        .footer-content__newsletter {
            margin: 4rem 0;
        }
    }

    .footer-content {
        &__logo, &__navigation, &__newsletter {
            display: flex;
        }

        &__logo {
            flex: 1 auto 0;
            padding-right: 1.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100px;
            margin: 2.5rem 0;
        }

        &__navigation {
            flex: 2 0 0;
            justify-content: space-evenly;
            padding: 0 1.5rem;
        }

        &__newsletter {
            flex: 1 auto 0;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            padding-left: 1.5rem;
            align-items: center;

            .subscribe { 
                ${typography.TextMd}
                color: ${props => props.theme.colors.neutralAlt};
                margin-bottom: 1.25rem;
            }

            .input-text {

                input {
                    width: 300px;
                    padding: .75rem 0;
                    background-color: inherit;
                    border: none;
                    color: ${props => props.theme.colors.neutral};

                    &:focus {
                        outline: none;
                        
                        &::placeholder {
                            font-size: calc(100% - 25%);
                            font-weight: 700;
                            position: absolute;
                            top: -5%;
                        }
                    }
                }

                &::after {
                    position: absolute;
                    left: 5px;
                    top: 3px;
                    content: attr(data-placeholder);
                    pointer-events: none;
                    opacity: 0.6;
                }
            }

            .btn-subscribe {
                ${typography.TextSm}
                background: ${props => props.theme.colors.primary};
                border: none;
                color: ${props => props.theme.colors.neutral};
                margin-top: 2rem;
                border-radius: 4px;
                text-transform: uppercase;
                font-weight: 500;
                cursor: pointer;

                &:active {
                    color: #fff;
                    transform: scale(.97);
                }
            }
        }
    }

    .footer-menu {
        li {
            ${typography.TextSm}
            color: ${props => props.theme.colors.neutralAlt};
            font-weight: 500;
            padding: .75rem .75rem .75rem 0;
            cursor: pointer;

            &:hover {
                color: ${props => props.theme.colors.primary};
                transform: scale(1.05);
            }
        }

    }

    @media (max-width: ${props => props.theme.breakpoints.sm}) {
        .footer-menu-3 {
            display: none !important;
        }
    }
`;

    export const FooterCredits = styled.div`
        height: 5rem;
        width: 100%;
        background: ${props => props.theme.colors.secondary};
        border-top: 1px solid ${props => props.theme.colors.secondaryAlt};
        display: flex;
        justify-content: center;

        .footer-credits__wrap {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .footer-credits__info {
            color: ${props => props.theme.colors.neutralAlt};
            ${typography.TextSm}
            font-size: calc(100% - 15%);
            font-weight: 500;
            text-align: center;

            p {
                padding: .2rem 0;
            }
        }
    `;

   