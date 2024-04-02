import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import x from '../icons/delete.png';


const StyledCard = styled.div`
    width: 100%;
    min-height: 100px;
    padding-left: 24px;
    border: solid 1px #3b3b3b;
    background-color: #313131;
    display: flex;
    margin-bottom: 16px;

    @media screen and (max-width: 515px) {
        width: calc(100% - 48px);
    }
`;

const StyledImage = styled.img`
    height: 88px;
    width: 88px;
    border-radius: 36px;
    margin-top: 56px;
    object-fit: cover;

    @media screen and (max-width: 515px) {
        height: 60px;
        width: 60px;
    }
    
`;

const StyledText = styled.p`
    min-width: 324px;
    max-width: 324px;
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
    margin-top: 56px;
    word-break: break-all;

    @media screen and (max-width: 515px) {
        min-width: calc(100% - 24px);
        max-width: calc(100% - 24px);
        margin-left: 20px;
    }

   
`;

const StyledName = styled.p`
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: #7a7a7a;
    word-break: break-all;

    @media screen and (max-width: 515px) {
        min-width: calc(100% - 24px);
        max-width: calc(100% - 24px);
        margin-left: -10px;
    }


`;

const StyledSand = styled.p`
    font-family: Roboto;
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: 0.29px;
    text-align: left;
    color: #5f5f5f;
    margin-left: -10px;
`;

export default function CardPubli(props: any) {
    const [foto, setFoto] = useState<string>('');

    useEffect(()=>{
        if(props.infos.Foto){
            
            const reader = new FileReader();
            reader.onloadend = () => {
                setFoto(reader.result as string);
            };
    
            if (props.infos.Foto) {
                reader.readAsDataURL(props.infos.Foto);
            } else {
                setFoto('');
            }
        }
    },[props.infos, props.infos.Foto])

    return (
        <StyledCard>
            <StyledImage src={foto} alt="Foto" />
            <span style={{ display: 'flex', flexDirection: 'column' }}>
                <StyledText>{props.infos.Mensagem}</StyledText>

                <div style={{display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '32px', marginLeft: '32px'}}>
                    <StyledSand>Enviado por</StyledSand>
                    <StyledName>{props.infos.Nome}</StyledName>
                </div>

            </span>
            <div style={{ height: '100%', width: '100%', display: 'flex', justifyContent: 'flex-end', paddingRight: '12px', paddingTop: '12px' }}>
                <img onClick={()=>{props.deleta(props.id);}} src={x} alt="delete" style={{ height: '20px', width: '20px', cursor: 'pointer' }} />
            </div>
        </StyledCard>
    );
}