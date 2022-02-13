import React, { useEffect, useState } from 'react';
import { getNews } from '../../services/supaFunctions';
import { NewsCard } from '../../components';
import { NewsProps } from '../../interfaces/News';

export function Home() {
  const [news, setNews] = useState<any>([]);      

  useEffect(() => {
    getNews().then(res => {
        setNews(res)
    })
  }, [])

  return (
    <>
    {news && news.map((item: any ) => {
      console.log(item);
      
        return (
          <div key={item.id}>
            <NewsCard news={item} />
          </div>
        )
    })}
    </>
  )
}
