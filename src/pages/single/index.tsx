import React from 'react'
import { useLocation } from 'react-router-dom';
import { Image } from '../../components';
import { SingleStyled } from './style';


export function Single() {
  const { state } = useLocation();
  const { id, author, title, subtitle, content, img } = state.news;
  
  return (
    <SingleStyled>
        <div className='single-container'>
          <div className='single-container__image'>
              <Image src={img} />
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
