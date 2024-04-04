import { X } from "@phosphor-icons/react";
import { PostContainer } from "./style";

export function Post() {
  return (
    <PostContainer>
      <div>
        imagem
      </div>
      <div>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, in reiciendis voluptatum cupiditate optio quidem nesciunt maiores, cumque, ut sint autem. Accusamus facilis nesciunt ullam illum, deserunt incidunt. Consectetur, dicta!
        </p>
        <h5>Enviado por</h5>
        <h3>Manuela Oliveira</h3>
      </div>
      <div className="x-btn">
        <X />
      </div>
    </PostContainer>
  )
}