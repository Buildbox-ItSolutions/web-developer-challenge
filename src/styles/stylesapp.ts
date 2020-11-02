import styled from 'styled-components'
import Colors from '../utils/Colors'

export const Header = styled.header`
  background: ${Colors.Black};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;

  img {
    width: 100px;
    height: 100px;
  }
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: 56px;
`;

export const Publish = styled.div`
  background-color: ${Colors.MainBlack};
  margin-top: 40px;
  width: 516px;
  height: 353px;
  border-radius: 3px;
  border: 1px solid ${Colors.BorderCard};
`;

export const FormCamp = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input{
    margin-top: 16px;
    width: 468px;
    height: 40px;
    border: none;
    border-radius: 8px;
    background-color: ${Colors.Grey};
  }

  input::placeholder{
    width: 101px;
    height: 17px;
    font-family: Roboto;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: normal;
    padding-left: 16px;
    color: ${Colors.Text};
  }

  textarea{
    margin-top: 8px;
    margin-right: auto;
    margin-left: auto;
    width: 468px;
    height: 80px;
    border-radius: 8px;
    border: none;
    background-color: ${Colors.Grey};
    resize: none;
  }

  textarea::placeholder{
    width: 70px;
    height: 17px;
    font-family: Roboto;
    font-size: 14px;
    line-height: 1.29;
    padding-left: 16px;
    letter-spacing: normal;
    color: ${Colors.Text};
  }
`;

export const ImageUpload = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 36px;
  border: 1px solid ${Colors.BorderUpload};
  background-color: rgba(75,75,75,0);
  margin-top: 14px;

  img{
    width: 24px;
    height: 24px;
    object-fit: contain;
    margin: 32px;
  }

  input{
    display: none;
  }
`;

export const ButtonsBackground = styled.div`
  margin-top: 30px;
  width: 90%;
  display: flex;
  justify-content: space-between;

  .PublishButton{
    width: 98px;
    height: 41px;
    border-radius: 8px;
    background-color: ${Colors.ButtonInative};
    color: ${Colors.MainBlack};
    font-family: 'Roboto', sans-serif;
  }
  
  .PublishButton:hover{
    background-color: ${Colors.Green};
    color: white;
  }
  
  .DescartButton{
    background: transparent;
    color: ${Colors.ButtonInative};
    margin-right: 10px;
    font-family: 'Roboto', sans-serif;
    text-decoration: underline;
  }
  
  .buttonsBackground{
    margin-top: 30px;
    width: 90%;
    display: flex;
    justify-content: space-between;
  }
`;

export const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;  

  h3{
    width: 30px;
    height: 17px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: right;
    color: ${Colors.SectionText}; 
    margin-bottom: 8px;
    display: absolute;
    margin-left: -465px;
  }

  div + div {
    margin-top: 15px;
  }
`;