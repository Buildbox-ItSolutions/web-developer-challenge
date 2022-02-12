
  
import { useContext } from 'react';
import { ModalWrapper,ModalContent, Background, ButtonCloseContainer, ButtonPublish} from './style'
import { IoMdClose } from 'react-icons/io'
import { ModalDeleteContext } from '../../providers/ModelDeletePost';
import { PostContext } from '../../providers/Posts';


const ModalDeletePost = () => {
    const { settingShowingModalDeleted, actualDelete} = useContext(ModalDeleteContext)
    const { removePost } = useContext(PostContext)


  const handleDelete = () =>{
    removePost(actualDelete)
  } 


  return (
    <>
     
        <Background>
            <ModalWrapper >
              <ModalContent>
                  <ButtonCloseContainer> 
                    <div>
                        <IoMdClose onClick={settingShowingModalDeleted}/>
                    </div>
                  </ButtonCloseContainer>
                  <p>Deseja mesmo deletar ? </p>
                  <ButtonPublish onClick={handleDelete}>Deletar</ButtonPublish>
              </ModalContent>
            </ModalWrapper>
        </Background>
    </>
  );
};

export default ModalDeletePost