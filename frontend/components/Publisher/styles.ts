import styled from 'styled-components';

export const Publisher = styled.form`
    width: 80%;
    height: 353px;
    background-color: #313131;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 3px;
    padding: 2em;
    border: 1px solid #3b3b3b;
    grid-column-start: 2;
    grid-column-end: 2;

    @media (min-width: 900px) {
        width: 100%;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProfilePicture = styled.div`
    margin-right: 1em;
    width: 88px;
    height: 88px;
    border-radius: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border: 1px solid #4b4b4b;

    input {
        display: none;
    }

    label {
        z-index: 10;
        width: 100%;
        height: 100%;
        border-radius: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        text-align: center;
    }
`;

const defaultInputProps = `
    width: 100%;
    border-radius: 8px;
    background-color: #494949;
    border: none;
    color: #ffff;
    padding: 0.9em;
    :focus {
        outline-width: 0;
    }
`;

export const Input = styled.input`
    ${defaultInputProps}
    height: 40px;
`;

export const Textarea = styled.textarea`
    ${defaultInputProps}
    height: 80px;
    resize: none;
`;

export const WrapperButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;

export const SubmitButton = styled.button`
    width: 98px;
    height: 41px;
    object-fit: contain;
    border-radius: 8px;
    background-color: #5f5f5f;
    color: #313131;
    border: none;
    transition: 0.3s;
    font-size: 14px;
    cursor: pointer;

    :focus {
        outline-width: 0;
    }

    :active {
        background-color: #71bb00;
        color: #fff;
    }
`;

export const CancelButton = styled.button`
    width: 60px;
    font-size: 14px;
    color: #5f5f5f;
    background: none;
    border: none;
    cursor: pointer;
    text-decoration: underline;
    margin-right: 1.5em;

    :focus {
        outline-width: 0;
    }
`;

export const Img = styled.img<{ width: string; height: string; color?: string }>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    color: ${({ color }) => color};
    cursor: pointer;
    border-radius: 36px;
`;
