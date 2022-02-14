import React, { useEffect, useState, useMemo } from 'react'
import { Image } from '../index'
import { ModalWrap } from './style'
import PlaceholderImg from '../../assets/img/placeholderimg.svg';
import BG1 from '../../assets/imagePosts/bg.jpg';
import { getImages, uploadImage, getPublicUrl } from '../../services/supaFunctions';
import TrashIcon from '../../assets/img/trash.svg';

export function ModalImage(props: any) {
    const [image, setImage] = useState(PlaceholderImg);
    const [isOpen, setIsOpen] = useState(false);
    const [modalImages, setModalImages] = useState<any>([]);
    const [urlImages, setUrlImages] = useState<any>();
        
    const memoCallback = useMemo(() => {
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

    function hanadleImage (image: string) {

        setImage(image);
        setIsOpen(!isOpen)
        return props.onSelectImage(image);
    }

    return (
    <>
        <ModalWrap>
            <div className='news-image'>
                <div onClick={() => setIsOpen(!isOpen)} className="news-image__wrap" >
                    <Image src={image} />
                </div>
                <div className='news-image__delete-icon' onClick={() => console.log('trash')}>
                    <Image src={TrashIcon} />
                </div>
            </div>
         
            { isOpen && <div className="modal-backdrop">
                    <div className='modal-content'>
                        <div className='modal-content__wrap'>
                            {modalImages && modalImages.map( (image: string) => {
                                return ( 
                                    <div className='modal-content__image' 
                                    key={image} 
                                    onClick={() => hanadleImage(image)
                                    }>
                                        <img src={image} alt=""/> 
                                    </div>
                                )                
                            })}
                        </div>
                    </div>
            </div>}
        </ModalWrap>
    </>
) }


