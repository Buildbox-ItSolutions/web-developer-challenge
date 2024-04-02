import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import camera from '../icons/image.svg';
import dell from '../icons/trash.png';

import Publish from '../../global.ts';

const StyledInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
`;

const StyledCustom = styled.label`
    cursor: pointer;
    height: 88px;
    width: 88px;
    background-image: url('${camera}');
    background-size: 24px 24px;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 36px;
    border: solid 1px #4b4b4b;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledTrash = styled.img`
    width: 24px;
    height: 24px;
    object-fit: contain;
    cursor: pointer;
    position: relative;
    left: 36px;
    margin-left: -24px;
`;

export default function InputCustom(props: any) {
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) return;
        const file = event.target.files[0];
        Publish.setFoto(file);
        props.setFoto(true);

        const reader = new FileReader();

        reader.onloadend = () => {
            setImagePreview(reader.result as string);
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

    const handleTrashClick = () => {
        Publish.setFoto(null);
        setImagePreview(null);
        props.setFoto(false);
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };

    useEffect(() => {
        if (props.fotoClear) {
            handleTrashClick();
            props.setFotoClear(false);
        }
    }, [props.fotoClear]);

    return (
        <StyledInput>
            <StyledCustom htmlFor="editFile" className='labelBt'>
                <div style={imagePreview ? { backgroundImage: 'none' } : undefined}>
                    {imagePreview ? <img src={imagePreview} style={{ width: '88px', height: '88px', borderRadius: '36px', objectFit: 'cover' }} alt="Preview" /> : null}
                </div>
                <input type="file" id="editFile" name="editFile" onChange={handleImageChange} style={{ display: 'none' }} ref={inputRef} />
            </StyledCustom>

            {Publish.getFoto() ? <StyledTrash src={dell} onClick={handleTrashClick} /> : null}
        </StyledInput>
    );
}
