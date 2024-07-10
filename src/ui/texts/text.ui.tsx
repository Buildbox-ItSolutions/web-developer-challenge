import styled, { css } from "styled-components";


const textVariants = {
  text: css`
      color: ${ ({ theme }) => theme.colors.warmGreyTwo };
      font-size: 14px;
  `,
  message: css`
    color: ${({ theme }) => theme.colors.warmGreyThree};
    font-size: 16px;
      width: 100%;
  `,

  sent: css`
    color: #5f5f5f;
    font-size: 12px;
  `,
};

interface TextUiProps {
  variant?: keyof typeof textVariants;
}

const TextUi = styled.span<TextUiProps>`
    max-width: 32.25rem;
    text-align: left;
    width: 100%;
    ${({ variant = "text" }) => textVariants[variant]}
`;

export default TextUi;