import React, { useEffect, useState } from 'react';
import { getNews } from '../../services/supaFunctions';
import { NewsCard } from '../../components';
import { NewsProps } from '../../interfaces/News';
import { HomeStyled } from './style';

export function Home() {
  const [news, setNews] = useState<any>([]);      

  useEffect(() => {
    getNews().then(res => {
        setNews(res)
    })
  }, [])

  return (
    <HomeStyled>
        <h3 className='section-title'>Feed</h3>
        <div className='grid-cards'>
          {news && news.map((item: any ) => {
              return (
                  <NewsCard news={{item}} key={item.id} />
              )
          })}
        </div>

    </HomeStyled>
  )
}
