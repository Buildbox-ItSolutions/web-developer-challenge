import styled from 'styled-components';

export const Card = styled.div`
    width: 80%;
    max-height: 525px;
    background-color: #313131;
    border: 1px solid #3b3b3b;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 20px;
    grid-column-start: 2;
    grid-column-end: 2;

    @media (min-width: 900px) {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: 1fr auto 2fr;
        grid-template-areas:
            'delete delete'
            'pic message'
            'author author';
    }
`;

export const DeletePost = styled.div`
    grid-area: delete;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const DeleteIcon = styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
`;

export const ProfilePictureWrapper = styled.div`
    width: 100%;
    height: 100%;
    grid-area: pic;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 900px) {
        padding: 10px;
    }
`;

export const ProfilePicture = styled.img`
    width: 88px;
    height: 88px;
    border-radius: 36px;
`;

export const Message = styled.p`
    box-sizing: border-box;
    width: 100%;
    height: auto;
    color: #9f9f9f;
    grid-area: message;
    word-break: break-all;
    font-size: 16px;
    display: flex;
    align-items: center;
    padding: 0 30px 20px 0;

    @media (max-width: 900px) {
        padding: 0;
        justify-content: center;
        margin: 10px 0 10px 0;
    }
`;

export const Author = styled.div`
    grid-area: author;
    display: flex;
    flex-direction: column;
    grid-column-start: 2;

    small {
        font-size: 12px;
        color: #5f5f5f;
    }

    strong {
        font-size: 14px;
        color: #7a7a7a;
    }
`;
