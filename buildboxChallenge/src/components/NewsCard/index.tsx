import { CardWrap } from './style';
import { Image } from '../index';
import { useNavigate } from 'react-router-dom';


export function NewsCard({news}: any) {
    const { title, subtitle, content, author, img } = news.item;
    const navigate = useNavigate();

    function  finalContent() {
      const contentShort = content.slice(0, 150);
      const contentLength = content.length;

      if (contentLength > 150) {
        return contentShort + '...';
      }

      return contentShort
    }
  
    const handlePage = (news: object) => {
      return navigate('/single', { state: { news } });
    }
   
    return (
    <CardWrap onClick={() => handlePage(news.item) } >
        <div className='card'>
          <div className='card-image'>
              <div className='card-image__wrap'>
                <Image src={img} />
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


