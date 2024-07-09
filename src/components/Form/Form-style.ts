import styled from "styled-components";

export const Form = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 90px;
    padding: 15px 0;

    border-radius: 5px;
    border: 1px solid #353535;
    background-color: var(--bg-section-color);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

    img {
        border: 1px solid #5F5F5F;
        border-radius: 2em;


        width: 5em;
        height: 5em;
        margin: 10px 0;

        object-fit: fill;
    }

    input, textarea {
        padding: 10px;
        width: 90%;
        color: #fff;
        background-color: var(--form-input-data);

        border-radius: 10px;
        margin-bottom: 10px;
        border: none;
    }

    textarea {
        min-width: 90%;
        max-width: 90%;
        min-height: 60px;
        max-height: 150px;
    }

    input::placeholder, textarea::placeholder {
        color: #9F9F9F;
    }

    input:focus, textarea:focus {
        outline: none;
    }

    .buttons-wrapper {
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: end;

        margin-top: 35px;
    }

    a {
        color: #494949;
        margin-right: 10px;
    }

    button {
        background-color: #5F5F5F;
        border: none;
        border-radius: 8px;
        padding: 12px;
        display: inline;
        
        color: #343434;
        width: 30%;

        transition: 0.3s;
    }
    
    button[type="submit"]:disabled {
        cursor: not-allowed;
        background-color: #5F5F5F;
    }

    button[type="submit"]:enabled {
        cursor: pointer;
        background-color: #71BB00;
    }

    
`;