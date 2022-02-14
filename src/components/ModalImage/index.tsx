import React, { useEffect, useState } from 'react'
import { Image } from '../index'
import { ModalWrap } from './style'
import PlaceholderImg from '../../assets/img/placeholderimg.svg';
import BG1 from '../../assets/imagePosts/bg.jpg';
import { getBucket, uploadImage } from '../../services/supaFunctions';

export function ModalImage() {
    const [image, setImage] = useState(PlaceholderImg);
    const [isOpen, setIsOpen] = useState(false);
    const [bg, setBg] = useState();

    console.log(getBucket());

    useEffect(() => {
        async function getImages() {
            const response = await getBucket();
            console.log(response);
            
        }
        getImages()
    }, [])
    
    useEffect(() => {
        console.log(isOpen);
    }, [isOpen])

    return (
        <ModalWrap onClick={() => setIsOpen(!isOpen)}>
            <Image src={image}/>
            { isOpen && <div className="modal-backdrop">
                    <div className='modal-content'>
                        <Image src={BG1}/>
                    </div>
            </div>}
        </ModalWrap>
)
}



{/* <input type={'file'} id={'file'} onChange={(e) => uploadImage(e)}/> */}