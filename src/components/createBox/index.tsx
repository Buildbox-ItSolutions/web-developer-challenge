import React, { useState, useEffect } from "react";
import styled from "styled-components";

import InputCustom from "../inputCustom/index.tsx";
import Publish from "../../global.ts";

const StyledBox = styled.div`
    width: 516px;
    height: 100%;
    border-radius: 3px;
    border: solid 1px #3b3b3b;
    background-color: #313131;
    margin: auto;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px;
`;

const StyledTextInput = styled.input`
    width: 468px;
    height: 40px;
    margin-bottom: 8px;
    padding: 12px 16px;
    border-radius: 8px;
    background-color: #494949;
    border: none;
    outline: none;
    font-family: 'roboto';
    font-size: 14px;
    color: white;
    ::placeholder {
        color: #999999;
    }
`;

const StyledTextArea = styled.textarea`
    width: 468px;
    height: 80px;
    padding: 12px 16px;
    border-radius: 8px;
    background-color: #494949;
    resize: none;
    border: none;
    outline: none;
    font-family: 'roboto';
    font-size: 14px;
    color: white;
    &::placeholder {
        color: ##9f9f9f
    }

    &::-webkit-scrollbar {
        width: 2px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #000;
        border-radius: 20px;
    }
`;

const StyledP = styled.p`
    width: 60px;
    height: 17px;
    font-family: 'roboto';
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: center;
    color: #5f5f5f;
    text-decoration: underline;
    cursor: pointer;
    margin-top: 44px;
    margin-bottom: 12px;
`;

const StyledButton = styled.button<{ $pronto: boolean }>`
    width: 98px;
    height: 41px;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-family: 'roboto';
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: center;
    outline: none;
    cursor: ${props => (props.$pronto ? 'pointer' : 'auto')};
    background: ${props => (props.$pronto ? '#71bb00' : '#5f5f5f')};
    color: ${props => (props.$pronto ? 'white' : '#313131')};
    margin-top: 32px;
`;

export default function Create() {
    const [nome, setNome] = useState<string>(Publish.getNome());
    const [mensagem, setMensagem] = useState<string>(Publish.getMensagem());
    const [foto, setFoto] = useState<boolean>(false);
    const [pronto, setPronto] = useState<boolean>(false);
    const [fotoClear, setFotoClear] = useState<boolean>(false);

    const handleNomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNome(e.target.value);
        Publish.setNome(e.target.value);
    };

    const handleMensagemChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMensagem(e.target.value);
        Publish.setMensagem(e.target.value);
    };

    useEffect(() => {
        if (nome && mensagem && foto) {
            setPronto(true);
        } else {
            setPronto(false);
        }
    }, [nome, mensagem, foto])

    const clear = () => {
        setMensagem('');
        setNome('');
        setFoto(false);
        setPronto(false);
    }

    return (
        <StyledBox>
            <InputCustom
                setFoto={setFoto}
                fotoClear={fotoClear}
                setFotoClear={setFotoClear}
            />
            <StyledTextInput
                type='text'
                placeholder="Digite seu nome"
                value={nome}
                onChange={handleNomeChange}
            />
            <StyledTextArea
                placeholder="Mensagem"
                value={mensagem}
                onChange={handleMensagemChange}
            />

            <span style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'flex-end', gap: '24px' }}>
                <StyledP onClick={() => { Publish.Clear(); clear(); setFotoClear(true); }}>Descartar</StyledP>
                <StyledButton $pronto={pronto}>Publicar</StyledButton>
            </span>
        </StyledBox>
    );
}
