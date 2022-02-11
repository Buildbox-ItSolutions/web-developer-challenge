import styled, { css, DefaultTheme } from 'styled-components';

type ButtonVariants = 'primary' | 'outlined' | 'icon';

type Props = {
  variant?: ButtonVariants;
};

const variantStyles = (
  theme: DefaultTheme,
  variant: ButtonVariants = 'primary',
) =>
  ({
    primary: css`
      background: ${theme.black[100]};
      color: ${theme.black[500]};
    `,
    outlined: css`
      background: none;
      color: ${theme.black[100]};
      text-decoration: underline;
    `,
    icon: css`
      padding: 0;
    `,
  }[variant]);

export default styled.button<Props>`
  border: none;
  padding: unset;
  margin: unset;
  background: none;
  cursor: pointer;
  font-size: 14px;
  padding: 12px 24px;
  border-radius: ${({ theme }) => theme.radius.md};
  font-family: Roboto, sans-serif;

  ${({ theme, variant }) => variantStyles(theme, variant)}
`;
