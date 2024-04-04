import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

import { X } from "@phosphor-icons/react";
import { PostContainer } from "./style";

interface PostProps {
  publishedAt: Date;
}

export function Post( { publishedAt }:PostProps) {
  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH'h'mm", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <PostContainer>
      <div className="post-img">
        imagem
      </div>
      <div>
        <div className="time">
          <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
        </div>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, in reiciendis voluptatum cupiditate optio quidem nesciunt maiores, cumque, ut sint autem. Accusamus facilis nesciunt ullam illum, deserunt incidunt. Consectetur, dicta!
        </p>
        <div className="footer-post">
          <h5>Enviado por</h5>
          <h3>Manuela Oliveira</h3>
        </div>
      </div>
      <div className="x-btn">
        <X />
      </div>
    </PostContainer>
  )
}