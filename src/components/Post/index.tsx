import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

import { X } from "@phosphor-icons/react";
import { PostContainer } from "./style";

interface PostProps {
  name: string;
  comment: string
  imageUrl: string | null;
  publishedAt: Date;
}

export function Post( { name, comment, imageUrl, publishedAt }:PostProps) {
  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH'h'mm", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <PostContainer>
      {imageUrl && (
        <div className="post-img-container">
          <img className='post-img' src={imageUrl} alt='oi'/>
        </div>
      )}
      <div>
        <div className="time">
          <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
        </div>
        <p>
        {comment}
        </p>
        <div className="footer-post">
          <h5>Enviado por</h5>
          <h3>{name}</h3>
        </div>
      </div>
      <div className="x-btn">
        <X />
      </div>
    </PostContainer>
  )
}