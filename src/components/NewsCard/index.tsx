import React from 'react';

export function NewsCard(news: any) {
    const { title, subtitle, content, author } = news;
    console.log(title);
    
  return (
    <>
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <p>{content}</p>
    </>
  )
}
