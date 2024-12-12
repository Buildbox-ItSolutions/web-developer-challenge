import logoImg from "../src/assets/bx-logo.svg"
import photoUpload from "../src/assets/photo-upload.svg"
import imageDefault from "../src/assets/image.svg"
import trashImage from "../src/assets/trash.png"
import { Post } from "./components/Post"
import { useState } from "react"
import { ArticleHeader, BorderImageUpload, ButtonDiv, DefaultImage, Discard, FeedText, Form, FormContainer, ImageUpload, MainContainer, MainLogo, MessageInput, NameInput, PostsSection, PublishButton, TrashImage, UploadedImageContainer, UploadedPhoto } from "./app-styles"

export interface PostInterface {
  id: number,
  photo: File | null,
  creatorName: string,
  message: string
}

export function App() {
  const [incrementalPostID, setIncrementalPostID] = useState<number>(0)
  const [posts, setPosts] = useState<PostInterface[]>([])
  const [name, setName] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [photo, setPhoto] = useState<File | null>(null)
  const [photoURL, setPhotoURL] = useState<string>("")

  function getButtonProperties() {
    if (name !== "" && message !== "" && photoURL !== "") {
      return "bg-customColors-button-green text-white cursor-pointer"
    }
    return "bg-customColors-button-gray text-customColors-black-two cursor-default"
  }

  function getButtonDisabled() {
    return (name === "" && message === "" && photoURL === "") 
  }

  function cleanAllFields() {
    setName("")
    setMessage("")
    setPhotoURL("")
    setPhoto(null)
  }

  function clearImage() {
    setPhotoURL("")
    setPhoto(null)
  }

  function addPost(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setPosts([{
      id: incrementalPostID,
      photo,
      creatorName: name,
      message
    }, ...posts])
    setIncrementalPostID(incrementalPostID+1)
    setName("")
    setMessage("")
    setPhotoURL("")
    setPhoto(null)
  }

  function removePost(postID: number) {
    setPosts(posts.filter((post: PostInterface) => {
      return postID !== post.id 
    }))
  }

  return (
    <MainContainer>
      <ArticleHeader>
        <MainLogo src={logoImg} alt="build box challenge logo" />
      </ArticleHeader>

      <FormContainer>
          <Form onSubmit={addPost}>
              {
                photoURL
                ?
                <UploadedImageContainer>
                  <UploadedPhoto src={photoURL}/>
                  <TrashImage src={trashImage} onClick={clearImage}/>
                </UploadedImageContainer>
                :
                <>
                  <BorderImageUpload src={photoUpload}/>
                  <DefaultImage src={imageDefault}/>
                </>
              }
              
              
              <ImageUpload onChange={(event) => {
                  if (!event.target.files) {
                    return null
                  }
                  setPhoto(event.target.files[0])
                  setPhotoURL(URL.createObjectURL(event.target.files[0]))
                }} type="file" accept="image/png, image/gif, image/jpeg"/>
              <NameInput value={name} onChange={(event) => setName(event.target.value)} type="text" placeholder="Digite seu nome"/>
              <MessageInput value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Mensagem"/>
              <ButtonDiv>
                <Discard onClick={cleanAllFields}>Descartar</Discard>
                <PublishButton disabled={getButtonDisabled()} type="submit" disabledStyle={name === "" || message === "" || photoURL === ""}>Publicar</PublishButton>
              </ButtonDiv>
          </Form>

          {
            posts.length > 0 &&
            <>
              <FeedText>Feed</FeedText>
              <PostsSection>
                {
                  posts.map((post: PostInterface) => {
                    return (
                      <Post removeFunction={removePost} key={post.id} id={post.id} photo={post.photo} creatorName={post.creatorName} message={post.message}/>
                    )
                  })
                }
              </PostsSection>
            </>
          }
      </FormContainer>
    </MainContainer>
  )
}

