import styled, {css, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0 auto;
        font-family: sans-serif;
    }
`;

export const PainelWrapper = styled.div`
    width: 1366px;
    height: 1540px;
    padding: 0 0 305px;
    background-color: #343434;
    box-sizing: border-box;
`;

export const HeaderStyle = styled.header`

    width: 1366px;
    height: 93px;
    padding: 24px 631px 24px 632px;
    background-color: #2b2b2b;
    box-sizing: border-box;
    position: sticky;
    top: 0;
    z-index: 999;

    img {
        width: 103px;
        height: 45px;
        object-fit: contain;
    }
`;

export const FeedFormStyled = styled.div`
    width: 516px;
    height: 353px;
    margin: 40px 425px 56px;
    padding: 24px;
    border-radius: 3px;
    border: solid 1px #3b3b3b;
    background-color: #313131;
    box-sizing: border-box;
`;

export const PhotoUpload = styled.div`
    width: 88px;
    height: 88px;
    margin: 0 8px 16px 190px;
    padding: 32px;
    object-fit: contain;
    border-radius: 36px;
    border: solid 1px #4b4b4b;
    background-color: rgba(75, 75, 75, 0);
    box-sizing: border-box;
    display: inline-block;
    cursor: pointer;

    img {
        width: 24px;
        height: 24px;
        object-fit: contain;
    }
`;

export const ButtonDelete = styled.div`
    width: 24px;
    height: 24px;
    margin: 0px 0px 0px 8px;
    display: inline-block;
    box-sizing: border-box;

    img {
        width: 24px;
        height: 24px;
        margin: auto;
        object-fit: contain;
        visibility: ${(props)=>props.visibililty ? 'visible' : 'hidden'};
    }
`;

export const InputBase = styled.input`
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: ${props => props.isActive ? '#fff' : '#9f9f9f'};
`;

export const Input = styled(InputBase)`
    width: 468px;
    height: 40px;
    margin: 0px 0 8px;
    padding: 12px 16px 11px 16px;
    border-radius: 8px;
    background-color: #494949;
    box-sizing: border-box;
`;

export const TextArea = styled.textarea`

    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: ${props => props.isActive ? '#fff' : '#9f9f9f'};


    width: 468px;
    height: 80px;
    margin: 0px 0 32px;
    padding: 12px 16px;
    border-radius: 8px;
    background-color: #494949;
    box-sizing: border-box;
    resize: none;
    cursor: ${props => props.isActive ? 'auto' : 'pointer'};
`;

export const ActionsButtons = styled.div`
    text-align: end;
`;

export const LabelDescartar = styled.span`
    width: 60px;
    height: 17px;
    margin: 12px 12px 12px 0;
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

    cursor: ${props => props.isActive ? 'pointer' : 'auto'};
`;

export const ButtonPublicar = styled.div`
    width: 98px;
    height: 41px;
    margin: 0 0 0 12px;
    padding: 12px 24px;
    object-fit: contain;
    border-radius: 8px;
    background-color: #5f5f5f;
    box-sizing: border-box;
    display: inline-block;

    ${props => props.isActive ? 
    css `
        background-color: #71bb00;
        color: #fff;
        cursor: pointer;
        ` : 
        css `
        background-color: #5f5f5f;
        color: #313131;
    `}

    span {
        width: 50px;
        height: 17px;
        font-family: Roboto;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.29;
        letter-spacing: normal;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const FeedListSpan = styled.span`
    
        width: 30px;
        height: 17px;
        margin: 56px 911px 8px 425px;
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

export const FeedWrapper = styled.div`
    width: 516px;
    height: 225px;
    margin: 8px 425px 16px;
    padding: 12px 12px 32px 24px;
    border-radius: 3px;
    border: solid 1px #3b3b3b;
    background-color: #313131;
    box-sizing: border-box;
    position: relative;
`;

export const PhotoBase = styled.img`
    width: 88px;
    height: 88px;
    margin: 44px 32px 16px 0;
    object-fit: contain;
    border-radius: 36px;
    box-sizing: border-box;
    display: inline-block;
`;

export const Message = styled.span`
    width: 348px;
    height: 80px;
    margin: 0px 0px 24px 0px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: left;
    color: #9f9f9f;
    display: block;

    position: absolute;
    top: 56px;
    left: 144px;
    right: 24px;
`;

export const EnviadoPor = styled.span`
    width: 66px;
    height: 14px;
    margin: 0px 0px 2px 120px;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: 0.29px;
    text-align: left;
    color: #5f5f5f;
    display: block;
`;

export const NameUser = styled.span`
        width: 103px;
    height: 17px;
    margin: 2px 0px 0 120px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: #7a7a7a;
`;

export const Delete = styled.img`
    width: 20px;
    height: 20px;
    margin: 0 0 24px 237px;
    object-fit: contain;
    position: absolute;
    right: 12px;
    top: 12px;
`;