import { css } from 'styled-components'


const mixins = {
    flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  btnDiscard: css`
    position: relative;
    margin: 12px;
    font-family: var(--font-sans);
    font-size: var(--fz-sm);
    line-height: 1.3;
    color: var(--button);
    border: 0;
    background-color: transparent;
    cursor: pointer;
  `,

  btnPublish: css`
    margin: 0 0 0 24px;
    padding: 12px 24px;
    border-radius: 8px;
    background-color: var(--button);
    color: var(--box);
    border: 0;
    cursor: pointer;
  `,

  
};

export default mixins