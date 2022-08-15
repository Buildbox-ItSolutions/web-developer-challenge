import tw from "twin.macro";
import React from "react";
import {useField} from "formik";
import {getBase64} from "../../helpers/imageToBase64";
import ImgPlaceholder from "../../assets/image_placeholder.svg";
import Image from "../Image";
import ImgTrash from "../../assets/trash.svg";
import { FormGroup } from './Shared'

const ImageInputForm = tw.input`
    opacity-0
`
const ImageInputInput = tw.div`
    flex
    flex-col
    items-center
    justify-center
    content-center
    w-[88px]
    h-[88px]
    min-w-[88px]
    min-h-[88px]
    max-w-[88px]
    max-h-[88px]
`;

const ImageInputContainer = tw.div`
    flex
    items-center
    justify-center
    w-full
    m-4
`;

const ImageInputWrapper = tw.label`
    flex 
    flex-col
    h-[88px]
    w-[88px]
    border
    border-black-450
    rounded-[36px]
    justify-center
    items-center
    content-center
`

const TrashCanIcon = tw.div`
    absolute
    ml-[140px]
`;

const ImageInput: React.FC<{}> = () => {
    const [field, meta, helpers] = useField<string>('image');
    const image = meta.value;

    const onFieldChange = (ev: any) => {
        const pickedFile = ev.currentTarget.files[0];
        getBase64(pickedFile).then(image => {
            helpers.setValue(image as any)
        });
    };

    const removeImage = (ev: any) => {
        helpers.setValue(ImgPlaceholder);
    }

    return (
        <FormGroup>
            <ImageInputContainer>
                <ImageInputWrapper>
                    <ImageInputInput>
                        <Image imageUri={image} />
                    </ImageInputInput>
                    <ImageInputForm type={"file"} accept={"image/png, image/jpeg"} onChange={onFieldChange} />
                </ImageInputWrapper>

                {image !== ImgPlaceholder && <TrashCanIcon onClick={removeImage}><Image imageUri={ImgTrash} /></TrashCanIcon>}
            </ImageInputContainer>
        </FormGroup>);
}

export default ImageInput;