import style from 'styled-components';

export const DivCard = style.div`
  img {
    width: 88px;
    height: 88px;
    margin: 24px 32px 9px 0;
    object-fit: contain;
    border-radius: 36px;
    margin: 0;
  }
  .nameText {
    width: 66px;
    height: 14px;
    margin: 16px 274px 2px 120px;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: 0.29px;
    text-align: left;
    color: #5f5f5f;
  }
  .peopleName {
    width: 103px;
    height: 17px;
    margin: 2px 237px 0 120px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: #7a7a7a;
  }
  .messageText {
    width: 348px;
    margin-left: 32px;
    color: #9f9f9f;
    font-size: 16px;
    word-break: break-all;
  }
  .formatCard {
    display: flex;
    flex-wrap: wrap;
  }
`;

export default DivCard;
