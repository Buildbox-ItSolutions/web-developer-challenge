import photo from '../assets/img/photo-base.jpg'
import deleteFeed from '../assets/img/delete.svg'
import { Delete, EnviadoPor, FeedWrapper, Message, NameUser, PhotoBase } from '../styles'



export const Feed = ({feed, onDelete}) => {

    return (
        <>
            <FeedWrapper>
                <PhotoBase src={photo}
                    srcset="../../img/photo-base@2x.jpg 2x,
             ../../img/photo-base@3x.jpg 3x"/>

                <Message>{feed.message}</Message>

                <EnviadoPor>Enviado por</EnviadoPor>

                <NameUser>{feed.name}</NameUser>

                <Delete src={deleteFeed} onClick={()=>onDelete(feed.id)}/>
            </FeedWrapper>


            {/* <div className='retangulo3'>
                <img src={photo}
                    srcset="../../img/photo-base@2x.jpg 2x,
             ../../img/photo-base@3x.jpg 3x"
                    class="photo-base"></img>

                <span class="loremIpsum">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.
                </span>

                <span class="enviadoPor">
                    Enviado por
                </span>

                <span class="name">
                    Manuela Oliveira
                </span>

                <img src={deleteFeed}
                    class="delete"></img>
            </div> */}
        </>

    )
}
