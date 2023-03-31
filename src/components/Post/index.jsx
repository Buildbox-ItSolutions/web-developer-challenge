// style
import { PostContainer } from './style';
import { AiOutlineCloseCircle } from 'react-icons/ai';


function Post({...props}) {
  return (
    <PostContainer image={props.image}>
      <div className='content'>
        <div className='user-image'/>
        <div className='post-infos'>
          <p>{props.message}</p>
          <span>Enviado por</span>
          <h4>{props.name}</h4>
        </div>
        <button onClick={() => props.handleDeletePost(props.index)}>
          <AiOutlineCloseCircle/>
        </button>
      </div>
    </PostContainer>
  )
} 
export default Post;