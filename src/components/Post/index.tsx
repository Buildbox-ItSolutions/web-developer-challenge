import Image from 'next/image'
import { CloseButton, Content, Detail, PostContainer } from './style'

export default function Post() {
  const testImage = "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"

  return (
    <PostContainer>
      <Image src={testImage} width={100} height={100} alt="Imagem" />
      <CloseButton>
        <button>
          <i className="ph ph-x-circle"></i>
        </button>
      </CloseButton>
      <Content>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.</p>
        <Detail>
          <span>Enviado por</span>
          <p>Menuela Oliveira</p>
        </Detail>
      </Content>
    </PostContainer>
  )
}
