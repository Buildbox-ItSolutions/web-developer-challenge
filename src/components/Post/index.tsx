import { X } from "@phosphor-icons/react";
import { PostContainer } from "./style";

interface PostProps {
  publishedAt: Date;
}

export function Post( { publishedAt }:PostProps) {
  const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    hour: "2-digit",
    minute: "2-digit",
  }).format(publishedAt)

  return (
    <PostContainer>
      <div className="post-img">
        imagem
      </div>
      <div>
        <div className="time">
          <time title="4 de fevereiro às 10:15" dateTime="2024-02-04 10:15:45" >{publishedDateFormatted}</time>
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