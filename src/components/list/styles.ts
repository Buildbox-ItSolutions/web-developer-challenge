import styled from 'styled-components';
import theme from "../../Theme";

const ListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 516px;
  margin: 41px auto 0 auto;

  @media (max-width: 550px) {
    width: 100%;

    > p { 
      text-align: center;
    }
  }
`;

const PostItem = styled.div`
  border: 1px solid #ddd;
  padding: 12px 24px;
  margin-bottom: 16px;
  border-radius: 3px;
  border:1px solid  ${theme.colors.border};
  background-color: ${theme.colors.box};
`;

const Excluir = styled.div`
  text-align: right;
`;

const Conteudo = styled.div`
  display: flex;
  margin: 10px 12px 0 12px;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const Mensagem = styled.p`
  margin: 0;
  padding-left: 32px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  text-align: left;
  color: ${theme.colors.text};

  @media (max-width: 550px) {
    margin-top: 16px;
    padding-left: 0;
    text-align: center;
  }
`;

const NomeWrapper = styled.div`
  margin: 24px 20px 20px 32px;

  @media (max-width: 550px) {
    margin-top: 12px;
  }
`;

const NomeLabel = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 0.29px;
  text-align: left;
  color: ${theme.colors.text_light};

  @media (max-width: 550px) {
    text-align: center;
  }
`;

const Nome = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: ${theme.colors.warm_grey_two};

  @media (max-width: 550px) {
    text-align: center;
  }
`;

export { ListWrapper, PostItem, Excluir, Conteudo, Mensagem, NomeWrapper, NomeLabel, Nome };
