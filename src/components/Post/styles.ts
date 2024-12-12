import styled from 'styled-components'
import Colors from '../../utils/Colors'
import { DeleteOutline } from '@styled-icons/typicons/DeleteOutline'

export const Container = styled.div`
  width: 516px;
  height: 225px;
  background: ${Colors.MainBlack};
  border-radius: 3px;
  border: 1px solid ${Colors.BorderCard};
  margin-bottom: 16px;

  img{
    width: 88px;
    height: 88px;
    object-fit: contain;
    border-radius: 36px;
    display: relative;
    margin-left: 24px;
    margin-top: 24px;
  }

  p{
    font-size: 16px;
    color: ${Colors.Text};
    line-height: 1.25;
    letter-spacing: normal;
    text-align: left;
    display: relative;
    margin-left: 144px;
    margin-top: -90px;
    margin-right: 24px;
  }

  h6{
    height: 14px;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.33;
    letter-spacing: 0.29px;
    text-align: left;
    color: ${Colors.ButtonInative};
    display: relative;
    margin-left: 144px;
    margin-top: 24px;
  }

  h5{
    height: 17px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: ${Colors.SectionText};
    display: relative;
    margin-left: 144px;
    margin-top: 2px;
  }
`;

export const Delete = styled(DeleteOutline)`
  color: ${Colors.Orange};
  width: 20px;
  height: 20px;
  display: relative;
  margin-left: 484px;
  margin-right: 12px;
  margin-top: 12px;
`;