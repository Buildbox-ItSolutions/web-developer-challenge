
  
import { useContext } from 'react';
import { ModalWrapper,ModalContent, Background, ButtonCloseContainer} from './style'
import { IoMdClose } from 'react-icons/io'
import { ModalDeleteContext } from '../../providers/ModelDeletePost';
import { useEffect } from 'react';
import { PostContext } from '../../providers/Posts';
import { FormCreatePost } from '../FormCreatePost';
import { FormEditPost } from '../FormEditPost';


const ModalEditPost = () => {
    const { settingShowingModalDeleted, actualDelete} = useContext(ModalDeleteContext)
    const { removePost } = useContext(PostContext)


  const handleDelete = () =>{
    removePost(actualDelete)
  } 


  return (
    <>
     
        <Background>
              <ModalContent>
                <FormEditPost/>
              </ModalContent>
        </Background>
    </>
  );
};

export default ModalEditPost