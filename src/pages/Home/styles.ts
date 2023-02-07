import styled, { css } from 'styled-components';

interface PublishProps {
  active: boolean;
}

export const PainelBuildbox = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 0 170px;
  background-color: var(--black);
`;

export const Form = styled.form`
  width: 516px;
  height: 373px;
  margin: 40px auto;
  padding: 24px;
  border-radius: 3px;
  border: solid 1px #3b3b3b;
  background-color: var(--black-two);
`;

export const ImgPhotoUpload = styled.div`
  width: 88px;
  height: 88px;
  margin: 0 8px 16px 190px;
  padding: 32px;
  object-fit: contain;
  border-radius: 36px;
  border: solid 1px #4b4b4b;
  background-color: rgba(75, 75, 75, 0);
  
`;

export const ImgIconPhotoUpload = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

export const InputName = styled.input`
  width: 468px;
  height: 40px;
  margin: 16px 0 8px;
  padding: 12px 12px 11px 16px;
  border-radius: 8px;
  background-color: #494949;
  color: white;
  border: 1px solid var(--black-two);
`;

export const InputMessage = styled.input`
  width: 468px;
  height: 80px;
  margin: 8px 0 32px;
  padding: 12px 12px 51px 16px;
  border-radius: 8px;
  background-color: #494949;
  color: white;
  border: 1px solid var(--black-two);
`;

export const Discard = styled.span`
  width: 60px;
  height: 17px;
  margin: 12px 0px 12px 0;
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

  &:hover {
    cursor: pointer;
  }
`;

export const Publish = styled.button<PublishProps>`
  width: 98px;
  height: 41px;
  margin: 0 0 0 24px;
  padding: 12px 24px;
  object-fit: contain;
  border-radius: 8px;
  border: 1px solid var(--black-two);
  background-color: #5f5f5f;
  transition: background-color 0.2s;
  
  ${(props: PublishProps) =>
    props.active &&
    css`
      background-color: #71bb00;
    `}
`;

export const ButtonGroup = styled.div`
  float: right;
`;

export const Feed = styled.section`
  width: 516px;

  margin: 0 auto;
`;

export const Title = styled.span`
  width: 30px;
  height: 17px;
  margin: 56px 0 8px 0;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: left;
  color: #7a7a7a;
`;

export const GroupImage = styled.div`
  display: flex;
`;
export const Trash = styled.img`
  width: 24px;
  height: 24px;
  margin: 32px 150px 48px 16px
`;