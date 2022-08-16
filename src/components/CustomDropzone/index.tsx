import { useDropzone } from 'react-dropzone';
import { ClearImage, Container, Dropzone, DropzoneContainer } from './styles';

import TrashIcon from '../../assets/trash.png';

import { useField } from '@unform/core';
import { useCallback, useEffect, useRef, useState } from 'react';
import UploadBackground from '../../assets/image.svg';

const CustomDropzone = () => {
    const inputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState<string | null>();
    const { fieldName, registerField, error } = useField('image');

    const { getRootProps, getInputProps, acceptedFiles } = useDropzone({
        accept: {
            'image/jpeg': [],
            'image/pjpeg': [],
            'image/png': [],
            'image/gif': [],
        },
    });

    const handleClearUploadedImage = useCallback(() => {
        setSelectedFile(null);
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef,
            getValue: () => {
                return selectedFile;
            },
            setValue: () => {
                setSelectedFile(
                    acceptedFiles.length
                        ? URL.createObjectURL(
                            acceptedFiles[acceptedFiles.length - 1]
                        )
                        : null
                );
            },
            clearValue: handleClearUploadedImage,
        });
    }, [
        fieldName,
        registerField,
        setSelectedFile,
        acceptedFiles,
        handleClearUploadedImage,
        selectedFile,
    ]);

    useEffect(() => {
        if (acceptedFiles.length) {
            setSelectedFile(
                URL.createObjectURL(acceptedFiles[acceptedFiles.length - 1])
            );
        }
    }, [acceptedFiles]);

    return (
        <Container>
            <DropzoneContainer error={error}>
                {!selectedFile && (
                    <Dropzone {...getRootProps()}>
                        <input
                            {...getInputProps()}
                            ref={inputRef}
                            onReset={handleClearUploadedImage}
                        />
                        <img src={UploadBackground} alt="" />
                    </Dropzone>
                )}
                {selectedFile && (
                    <>
                        <img src={selectedFile} alt="Uploaded Image" />
                        <ClearImage
                            onClick={handleClearUploadedImage}
                            type="button"
                        >
                            <img src={TrashIcon} alt="" />
                        </ClearImage>
                    </>
                )}
            </DropzoneContainer>
        </Container>
    );
};

export default CustomDropzone;
