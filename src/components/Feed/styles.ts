import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 516px;
    width: 85%;
    margin: auto;
    padding-bottom: 50px;

    .noPosts{
        color: ${Colors.feedTitle};
    }

    h2{
        font-weight: 500;
        color: ${Colors.feedTitle};
        margin-bottom: 8px;
    }
`;
export const WrapperList = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;
