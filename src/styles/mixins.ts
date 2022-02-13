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

    &:hover{
      filter: brightness(0.8);
    }
  `,

  btnPublish: css`
    margin: 0 0 0 24px;
    padding: 12px 24px;
    border-radius: 8px;

    background-color: #71bb00;
    color: var(--input-text);
    cursor: pointer;

   
    border: 0;

    transition: var(--transition);

    &:hover{
      filter: brightness(0.8);
    }
    
  `,

  
};

export default mixins