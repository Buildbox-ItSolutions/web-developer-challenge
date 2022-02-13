import React from 'react';
import { CardWrap } from './style';
import Avatar from '../../assets/img/avatar.jpg';
import { Image } from '../index';

export function NewsCard({news}: any) {
    const { title, subtitle, content, author } = news.item;

    return (
    <CardWrap>
        <div className='card'>
          <div className='card-image'>
              <div className='card-image__wrap'>
                <Image src={Avatar} />
              </div>
          </div>
          <div className='card-info'>
            <p className='card-info__content'>{content}</p>
            <div className='card-info__footer'>
              <h3 className='card-info__text'>Enviado por</h3>
              <h3 className='card-info__author'>{author}</h3>
            </div>
          </div>
        </div>
    </CardWrap>
  )
}


