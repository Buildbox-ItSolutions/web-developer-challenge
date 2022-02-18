import style from 'styled-components';

export const DivForm = style.div`
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: #313131;
  padding: 24px;
  width: 516px;
  height: 353px;
  margin: 40px 425px 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  .userImage {
    width: 88px;
    height: 88px;
    margin: 0 16px 0 205px;
    object-fit: contain;
    border-radius: 36px;
  }
  .imageDetails input[type="file"] {
    display: none;
  }
  .publicarBtn {
    width: 98px;
    height: 41px;
    margin: 0 0 0 24px;
    padding: 12px 24px;
    border-radius: 8px;
    background-color: #71bb00;
    font-family: Roboto;
    color: #fff;
    font-size: 14px;
  }
  .descartarBtn {
    font-family: Roboto;
    color: #fff;
    width: 60px;
    height: 17px;
    margin: 0 0 0 24px;
    color: #5f5f5f;
    text-decoration: underline;
    :hover {
      color: #797979;
    }
    background-color: inherit;
    border: none;
    line-height: 1.29;
  }
  .messageArea {
    width: 490px;
    height: 80px;
    margin: 16px 0 8px;
    padding: 12px 16px;
    border-radius: 8px;
    background-color: #494949;
    color: #fff;
    font-size: 14px;
    border: none;
    font-family: Roboto;
  }
  .nameArea {
    width: 490px;
    height: 40px;
    margin: 16px 0 8px;
    padding: 12px 16px;
    border-radius: 8px;
    background-color: #494949;
    border: none;
    color: #fff;
    font-size: 14px;
    font-family: Roboto;
  }
  .btnFlex {
    display: flex;
    justify-content: right;
    align-items: center;
  }
`;

export default DivForm;
