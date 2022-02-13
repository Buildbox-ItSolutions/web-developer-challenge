import React from 'react';
import { CardWrap } from './style';
import Avatar from '../../assets/img/avatar.jpg';
import { Image } from '../index';
import { deleteNews } from '../../services/supaFunctions';
import { useNavigate } from 'react-router-dom';


export function NewsCard({news}: any) {
    const { title, subtitle, content, author } = news.item;
    const navigate = useNavigate();

    function  finalContent() {
      const contentShort = content.slice(0, 100);
      const contentLength = content.length;

      if (contentLength > 60) {
        return contentShort + '...';
      }

      return contentShort
    }
  
    const handlePage = (news: object) => {
      return navigate('/single', { state: { news } });
    }
    
    return (
      // onClick={() => deleteNews(news.item.id)}
    <CardWrap onClick={() => handlePage(news.item) } >
        <div className='card'>
          <div className='card-image'>
              <div className='card-image__wrap'>
                <Image src={Avatar} />
              </div>
          </div>
          <div className='card-info'>
            <p className='card-info__content'>{finalContent()}</p>
            <div className='card-info__footer'>
              <h3 className='card-info__text'>Enviado por</h3>
              <h3 className='card-info__author'>{author}</h3>
            </div>
          </div>
        </div>
    </CardWrap>
  )
}


