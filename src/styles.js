import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #343434;
`;

export const ImgPhoto = styled.div`    
    height: 88px;
    width: 88px;
    object-fit: contain;
    border-radius: 36px;
    border: solid 1px #4b4b4b;
    background-image: url(${props => props.src});
    background-size: cover; 
`;

export const ContainerPost = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #343434;
    padding: 24px;
`;

export const PostInformatcion = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const ButtonDiv = styled.div`
    display: flex;
    width: 100%;
    height: 10%;
    justify-content: flex-end;
    align-items: center;  
`;

export const ButtonPub = styled.button`
    width: 98px;
    height: 41px;
    padding: 12px 24px;
    border-radius: 8px;
    background-color: ${props => props.disabled ?   '#5f5f5f':  '#71bb00'} ;
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: center;
    color: ${props => props.disabled ?  '#313131': '#fff'}  ;
    cursor: ${props => props.disabled ? 'default' : 'pointer'}  ;
` ;

export const ImgDelete = styled.div`   
    width: 20px;
    height: 20px;  
    object-fit: contain;
    margin  : 10px 10px 10px 10px ;
    background-image: url(${props => props.src});   
    cursor: pointer; 
    background-size: cover;    
`;

export const ContentInput = styled.div`
    display: flex;
    width: 100%;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;   
`;

export const ContentLoren = styled.div`
    display: flex;
    width: 100%;
    height: 60%;
    justify-content: flex-start;
    align-items: center;
`;

export const Content = styled.div`       
    display: flex;
    align-items: center;
    justify-content: center;    
    flex-direction: column;
    gap: 20px;
    width: 516px;
    border-radius: 3px;
    border: solid 1px #3b3b3b;
    background-color: #313131;
    padding: 36px;
    margin-bottom: 56px;

    input {        
        width: 100%;
        height: 40px;    
        padding: 5px 10px 5px 10px;        
        border-radius: 8px;
        background-color: #494949; 
        font-family: Roboto;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.29;
        letter-spacing: normal;
        text-align: left;
        color: #fff;
    }

    textarea {
        width: 100%;    
        height: 80px;
        //height: 80px;       
        padding: 5px 10px 5px 10px;  
        border-radius: 8px;
        background-color: #494949;
        font-family: Roboto;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.29;
        letter-spacing: normal;
        text-align: left;
        color: #fff;       
    }    
`;

export const ContentPost = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    background-color: #343434;    
`;

export const PostImgPhoto = styled.div`
    display: 'flex';
    align-items: 'center';
    justify-content: 'center';
    width: '30%'; 
    background-color: 'red';    
`;


export const Post = styled.div`
    display: flex;
    justify-content: center;
    justify-items: center;
    height: 260px;
    background-color: #313131; 
    width: 100%;
    padding-top: 10px;
    border-radius: 3px;
    border: solid 1px #3b3b3b;
    background-color: #313131;    
`;


export const SpanFeed = styled.span`        
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

export const SpanMessage = styled.span`   
    width: 348px;
    height: 80px;
    margin: 24px 12px 24px 32px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: left;
    color: #9f9f9f;
`;

export const SpanEnviadoPor = styled(SpanMessage)`    
    font-family: Roboto;
    font-size: 12px;
    font-weight: 500;    
    font-style: normal;
    line-height: 1.33;
    letter-spacing: 0.29px;
    text-align: left;
    color: #5f5f5f;
`;

export const SpanName = styled(SpanMessage)`
    color: #9f9f9f;
`;

export const Input = styled.input`   
  box-sizing: border-box; 
  width: 468px;
  height: 40px;
  margin: 16px 0 8px;
  padding: 12px 351px 11px 16px;
  border-radius: 8px;
  background-color: #494949;   
`;
