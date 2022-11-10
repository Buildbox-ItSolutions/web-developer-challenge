import styled from 'styled-components';

export const CommentBox = styled.div`
    width: 516px;
    height: 225px;
    margin: 8px auto 16px;
    padding: 12px 12px 32px 24px;
    border-radius: 3px;
    border: solid 1px #3b3b3b;
    background-color: #313131;

    display: flex;
    align-items: center;
    flex-direction: column;

    @media (max-width: 992px){
        &{
            width: 100%;
            height: auto;
        }
        
    }
`;

export const WrapperImage = styled.div`
    width: 88px;
    height: 88px;
    border-radius: 36px;
    border: solid 1px #4b4b4b;
    background-color: rgba(75, 75, 75, 0);
    overflow: hidden;
`;