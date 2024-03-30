'use client'

import styled from 'styled-components'

export const CreatePostSection = styled.section`
    width: 100%;   
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 41px;
    margin-bottom: 56px;
`

export const FormWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background-color: ${({ theme }) => theme.cardBg};        
    border: 1px solid ${({ theme }) => theme.border};
`

export const FileInputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;    
    flex-direction: column;

    input {
       display:none;
    }
    
    label {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 88px;
        height: 88px;
        border-radius: 36px;
        border: 1px solid ${({ theme }) => theme.border};
        position: relative;
        overflow: hidden;
    }

    p {
        color: ${({ theme }) => theme.error};
        margin: 5px 0;
    }
`

export const DeleteIcon = styled.button`
    position: absolute;
    transform: translate(290%);    
`

export const TextInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 16px;

    p {
        color: ${({ theme }) => theme.error};
        margin: 5px 0;
    }
    

    input, textarea {
        padding: 12px 16px 11px 16px;
        border-radius: 8px;
        background-color: ${({ theme }) => theme.inputField};
        box-sizing: border-box;
        color: ${({ theme }) => theme.white};
        width    : 100%;     

        &::placeholder {
            color: ${({ theme }) => theme.primaryGray};
            font-size: 1.4rem;
            font-family: 'Roboto', sans-serif;         
        }

        &:focus {
            outline: 1px solid ${({ theme }) => theme.primaryGray}
        }
    }
    
    textarea {
        min-height: 100px;
		overflow-wrap: break-word;
		overflow-y: scroll;
		scrollbar-width: none;

		&::-webkit-scrollbar {
			display: none;
		}
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    gap: 24px;
    justify-content: flex-end;
    margin-top: 32px;

    :first-child {
        cursor: pointer;
        color: ${({ theme }) => theme.secondaryGray};
        text-decoration: underline;
    }

    :last-child {
        cursor: pointer;        
        padding: 12px 24px;
        background-color: ${({ theme }) => theme.buttonReady}; 
        color: ${({ theme }) => theme.white};
        border-radius: 8px;
        

        &:disabled {
            background-color: ${({ theme }) => theme.secondaryGray};
            color: ${({ theme }) => theme.black}
        }
    }
`
