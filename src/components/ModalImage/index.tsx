import React, { useEffect, useState } from 'react'
import { Image } from '../index'
import { ModalWrap } from './style'
import PlaceholderImg from '../../assets/img/placeholderimg.svg';
import BG1 from '../../assets/imagePosts/bg.jpg';
import { getImages, uploadImage, getPublicUrl } from '../../services/supaFunctions';

export function ModalImage() {
    const [image, setImage] = useState(PlaceholderImg);
    const [isOpen, setIsOpen] = useState(false);
    const [bg, setBg] = useState<any>();
    const [modalImages, setModalImages] = useState<any>([]);
    const [namesImage, setNamesImage] = useState<any>();

    useEffect(() => {
        async function aff() {
            const response = await getImages();
            setNamesImage(response);
        }
        aff()
    }, [])

    useEffect(() => {
        const allImages: any = [];

        async function teste() {
            if(namesImage){
                for (const image of namesImage) {

                    const response = await getPublicUrl(image.name);
                    allImages.push(response);
                }
            }

            setModalImages(allImages);
        }
        
        teste();

    }, [namesImage]);

    return (
    <>
        <ModalWrap onClick={() => setIsOpen(!isOpen)}>
            {modalImages && modalImages.map( (image: string) => {
                    return ( <img key={image} src={image} alt=""/> )                
            })}
            { isOpen && <div className="modal-backdrop">
                    <div className='modal-content'>
                        {modalImages && modalImages.map( async (img: any) => {
                            <div className='modal-img' key={img.name}>
                            </div>
                        })}
                    </div>
            </div>}
        </ModalWrap>
        </>
)
}


