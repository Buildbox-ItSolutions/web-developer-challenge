import styled from 'styled-components';

export const Post = styled.section`
    padding: 15px 30px;
    background-color: var(--bg-section-color);
    border-radius: 5px;
    margin-bottom: 15px;

    display: flex;
    flex-direction: column;

    button {
        align-self: flex-end;
        background-color: transparent;
        border: none;
    }

    button #close-icon {
        font-size: x-large;
        color: #353535;
        cursor: pointer;
        
    }

    .content-wrapper {
        display: flex;
        justify-content: space-between;
    }

    .photo-wrapper {
        width: 30%;
    }

    .photo-wrapper img {  
        border: 1px solid #5F5F5F;
        border-radius: 3em;

        width: 7em;
        height: 7em;
        margin: 10px 0;

        object-fit: fill;
    }

    .message-wrapper {
        width: 80%;
        margin-bottom: 1em;
    }

    p {
        font-size: larger;
        margin: 15px 0;
        color: var(--light-grey);
        margin-bottom: 3em;
    }

    small {
        font-size: small;
        color: var(--form-input-data);
        margin-top: 10px;
        font-weight: 700;
    }

    #nameAuthor {
        font-size: medium;
        color: var(--light-grey);
        font-weight: 600;
        margin: 0;
    }


`;