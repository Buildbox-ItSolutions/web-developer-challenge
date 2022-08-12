import Image from 'next/image'
import { PostCardContainer } from './style'

export default function PostCard() {
  const loaderImageProp = ({ src }: { src: string }) => {
    return src
  }

  return (
    <PostCardContainer>
      <div className="cardArea">
        <div className="imageArea">
          <Image
            src="https://d3hnfqimznafg0.cloudfront.net/images/news/ImageForNews_26805_15752980188385490.jpg"
            loader={loaderImageProp}
            alt="Post image"
            width="88px"
            height="88px"
            className="imagePost"
          />
        </div>
        <div className="textArea">
          <h1 className="message">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic harum
            pariatur dolor in consequuntur debitis tempore assumenda id ullam
            obcaecati.
          </h1>
          <h6>Enviado por</h6>
          <h4 className="name">Manuela Oliveira</h4>
        </div>
      </div>
    </PostCardContainer>
  )
}
