import {useState, useRef, useContext} from 'react';
// context
import { MyContext } from '../../context/MyContext';
// style;
import * as style from './style';
import { CiImageOn } from 'react-icons/ci';
import { SlTrash } from 'react-icons/sl';

function Index() {

  const [postInfos, setPostInfos] = useState({});
  const inputRef = useRef(null);
  const { setListPosts } = useContext(MyContext);
  
  const handleImageUpload = event => {
    const imageFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(imageFile);
    setPostInfos(prevPost => ({...prevPost, image: imageUrl}));
  };

  const handleSaveInfos = event => {
    setPostInfos(prevPost => ({
      ...prevPost,
      [event.target.name]: event.target.value
    }));
  };

  const handlePost = () => {
    setListPosts(prevLists => ([...prevLists, postInfos].reverse()))
    handleDelete()
  };

  const handleDelete = () => {
    setPostInfos({
      image: '',
      name: '',
      message: '',
    });
  };

  const deleteImage = () => {
    setPostInfos(prevPost => ({
      ...prevPost,
      image: '',
    }));
  }

  return (
    <style.FormsContainer>
      <style.Forms image={postInfos.image}>
        <div className='container-image'>
          <button onClick={() => inputRef.current.click()} className='button-input'>
            {postInfos.image ? '' : <CiImageOn style={{color: 'white', fontSize: 20}}/>}
            <input 
              ref={inputRef} 
              type='file' 
              onChange={handleImageUpload} 
            />
          </button>
          {postInfos.image === '' || 
            <button onClick={deleteImage} className='delete-image'>
              <SlTrash/>
            </button>
          }
        </div>

        <div className='inputs-texts'>
          <input
            onChange={handleSaveInfos}
            value={postInfos.name}
            name='name'
            className='input' 
            type='text' 
            placeholder='Digite seu nome'
          />
          <textarea
            onChange={handleSaveInfos}
            value={postInfos.message}
            name='message'
            className='input-message input' 
            type='text' 
            placeholder='Mensagem'
          />
        </div>

        <div className='action-button'>
          <button onClick={handleDelete} className='button-trash'>Descartar</button>
          <button onClick={handlePost} className='button-post'>Publicar</button>
        </div>
      </style.Forms>

    </style.FormsContainer>
  )
}
export default Index
