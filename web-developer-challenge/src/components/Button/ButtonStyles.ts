"use client"

import { styled, css } from "styled-components"
import { ButtonProps } from "./Button";

export const StyledButton = styled.button<ButtonProps>`
    ${(props) => getStyleByVariant(props.variant || 'default')}
`

const getStyleByVariant = (variant : string) => {
        switch (variant ?? "default") {
            case "default": {
            return css<ButtonProps>`
                width: 98px;
                height: 41px;
                padding: 12px 24px;
                border-radius: 8px;
                background-color: ${props => props.disabled ? "#5f5f5f" : "#71bb00"};
                display: flex;
                align-items: center;
                justify-content: center;
            `;
        }

        case "outline": {
            return css<ButtonProps>`
                width: 60px;
                height: 17px;
                margin: 12px 24px 12px 0;
                font-family: Roboto;
                font-size: 14px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.29;
                letter-spacing: normal;
                text-align: center;
                color: #5f5f5f;
                text-decoration: underline;
            `;
        }
    }
}
