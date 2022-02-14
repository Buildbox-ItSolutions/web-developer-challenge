import React, { useEffect, useState, useCallback } from 'react'
import { Image } from '../index'
import { ModalWrap } from './style'
import PlaceholderImg from '../../assets/img/placeholderimg.svg';
import BG1 from '../../assets/imagePosts/bg.jpg';
import { getImages, uploadImage, getPublicUrl } from '../../services/supaFunctions';

export function ModalImage() {
    const [image, setImage] = useState(PlaceholderImg);
    const [isOpen, setIsOpen] = useState(false);
    const [modalImages, setModalImages] = useState<any>([]);
    const [urlImages, setUrlImages] = useState<any>();

    useEffect(() => {
        async function getAllImages() {
            const response = await getImages();
            setUrlImages(response);
        }

        getAllImages()
    }, [])

    useEffect(() => {
        const allImages: any = [];

        async function queryImages() {
            if(urlImages){
                for (const image of urlImages) {

                    const response = await getPublicUrl(image.name);
                    allImages.push(response);
                }
            }

            setModalImages(allImages);
        }
        
        queryImages();
    }, [urlImages]);

    return (
    <>
        <ModalWrap onClick={() => setIsOpen(!isOpen)}>
            <Image src={image} />
         
            { isOpen && <div className="modal-backdrop">
                    <div className='modal-content'>
                        <div className='modal-content__wrap'>
                            {modalImages && modalImages.map( (image: string) => {
                                return ( 
                                    <div className='modal-content__image' key={image}>
                                        <img src={image} alt=""/> 
                                    </div>
                                )                
                            })}
                        </div>
                    </div>
            </div>}
        </ModalWrap>
        </>
)
}


