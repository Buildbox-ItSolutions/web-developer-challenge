import styled from 'styled-components';
import { Colors } from '../../styles/Colors';

export const Feed = styled.div`
    max-width: 516px;
    width: 516px;
    display: flex;
`;

export const Container = styled.div`
    width: 100%;
    margin: 8px auto;
    border-radius: 3px;
    border: solid 1px ${Colors.borderFeed};
    background-color: ${Colors.bgFeed};
    box-sizing: border-box;

`;
export const ContentWrapper = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
    
    .button-remove{
        
        margin-left: auto;
        width: 20px;
        height: 20px;
        top: 12px;
        right: 12px;
        position: relative;
        transition: transform 0.2s ease-in;
        &:hover {
            transform: scale(1.2);
        }
    }
`;

export const InfoWrapper = styled.div`
    margin: 32px 24px 0px 24px;
    display: flex;

    .post-content{
        
        p{
            font-size: 16px;
            color: ${Colors.postText};
            line-height: 1.29;
        }
    }
    .author-wrapper{
        
        margin: 24px 0 32px 0;
        
        span{
            font-size: 12px;
            font-weight: 500;
            color: ${Colors.postBy};
        }
        p{
            font-size: 14px;
            color: ${Colors.postAuthor};
        }
    }
    .post-photo{
        width: 88px;
        height: 88px;
        margin-right: 32px;
        border-radius: 36px;
        border: 1px solid ${Colors.borderImg};
        object-fit: cover;
    }
`;


