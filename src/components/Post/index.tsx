import { PostPropsInterface } from '../../interfaces/PostInterface';
import { PostImg, PostContainerIn, PostImgNoBorder, PostContainerOut } from '../../styles/global';
import { PostDelIcon, PostLabel, PostName, PostText } from './styles';
import del from '../../assets/delete.svg';
import { dataStore } from '../../data/data';
import { useState } from 'react';

function Post(props:PostPropsInterface) {
    const [deleting, setDeleting] = useState(false);
    const components = {
        in: PostContainerIn,
        out: PostContainerOut
    }
    const PostContainer = deleting?components["out"]:components["in"];
    const handleDelete = () => {
        setDeleting(true)
        setTimeout(() => {
            dataStore.delPost(props.index as number);
        }, 1000);
    }
    return(
    <PostContainer className='p-3 mb-3' {...props}>
        <div className='w-100 d-flex justify-content-end'>
            <PostDelIcon src={del} onClick={handleDelete}/>
        </div>
        <div className={'p-4 row py-3'}>
            <PostImgNoBorder className='col-3 me-4'>
                <PostImg  src={props.img}/>
            </PostImgNoBorder>
            <div className='col-8 gx-0 d-flex flex-column'>
                <PostText>
                    {props.content}
                </PostText>
                <PostLabel className='mt-4'>
                    Enviado por
                </PostLabel>
                <PostName>
                    {props.name}
                </PostName>
            </div>
            
        </div>
    </PostContainer>)
}

export {Post};