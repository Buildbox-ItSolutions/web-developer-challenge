import styled, { css } from 'styled-components'
import type { IButtonProps } from '.'

export type IButtonStyleProps = IButtonProps

export const Button = styled.button<IButtonStyleProps>`
  ${({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    bg
  }) => css`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 30px;

    background-color: ${bg};

    color: white;
    font-size: 1.6;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;

    border: none;
    border-radius: 5px;
    outline: none;
    background-size: 200% auto;

    cursor: pointer;
    user-select: none;
    overflow: hidden;

    transition: all 0.2s;
    transition: background 0.5s;

    &:hover {
      background-position: right center;
      text-decoration: none;
    }
  `}
`
