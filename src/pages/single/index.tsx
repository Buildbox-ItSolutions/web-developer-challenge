import React from 'react'
import { useLocation } from 'react-router-dom';
import { Image, Button } from '../../components';
import { SingleStyled } from './style';
import { deleteNews } from '../../services/supaFunctions';
import { useNavigate } from 'react-router-dom';



export function Single() {
  const { state } = useLocation();
  const { id, author, title, subtitle, content, img } = state.news;
  const navigate = useNavigate();

  async function handleDelete(id: number ){
      await deleteNews(id);
      navigate('/');
  }
  
  return (
    <SingleStyled>
        <div className='single-container'>
          <div className='single-container__image'>
              <Image src={img} />
              <div className='single-container__button'>
                <Button onClick={() => handleDelete(id)} bgColor="#343434">Delete</Button>
              </div>
          </div>
          <div className='single-container__info'>
              <h1 className='single-container__info-title'>
                {title}
              </h1>
              <h2 className='single-container__info-subtitle'>
                {subtitle}
              </h2>
              <h4 className='single-container__info-author'>
                Escrito por : {author}
              </h4>
          </div>
          <div className='single-container__content'>
              <p className='single-container__text'>{content}</p>
          </div>
        </div>
    </SingleStyled>
  )
}
