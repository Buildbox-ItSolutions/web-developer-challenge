import styled from "styled-components";
import { IoCloseCircleOutline, IoImageOutline } from "react-icons/io5";


export type PostProps = {
    Id: string;
    Message: string;
    SentBy: string;
    Image64: string;
    RemovePost?: () => void
}

const PostArticle = styled.article`
    border: 1px solid #3B3B3B;
    border-radius: 2px;
    background-color: #313131;
    
    display: flex;
    flex-direction: column;

    width: 100%;
    align-items: center;
`

const Text = styled.span`
    display: flex;
    flex-direction: column;

    justify-content: space-between;

    width: 90%;
    margin: 0 4% 0 4%;

    color: #f9f9f9;

    p, strong {
        margin: 0;
        overflow-wrap: anywhere;
    }
`;

const Weak = styled.p`
    color: #5F5F5F;
`

const Strong = styled.strong`
    color: #7A7A7A;
`

const Content = styled.div`
    display: flex;
    width: 100%;

    margin-bottom: 2rem;
`

const Delete = styled.span`
    align-self: end;
    cursor: pointer;
    margin: 0.5rem 0.5rem 0 0;
`;

const Image = styled.img`
    width: auto;
    height: 100%;

    aspect-ratio: 1;
        
    object-fit: cover;

    border-radius: 20px;
    border: 1px solid #4B4B4B;
`;

const ImageEncolsure = styled.div`
    margin: 0 4%;
    border-radius: 20px;
    border: 1px solid #4B4B4B;

    height: 128px;
`;

const SentBy = styled.span``;

export default function Post(props: PostProps) {
    return (
        <PostArticle key={props.Id}>
            <Delete>
                <IoCloseCircleOutline size='28px' color="#D65923" onClick={props.RemovePost!} />
            </Delete>
            <Content>
                <ImageEncolsure>
                    <Image src={props.Image64} alt="Imagem do Post" />
                </ImageEncolsure>
                <Text>
                    <p>
                        {props.Message}
                    </p>
                    <SentBy>
                        <Weak>
                            Enviado por:
                        </Weak>
                        <Strong>
                            {props.SentBy}
                        </Strong>
                    </SentBy>
                </Text>
            </Content>
        </PostArticle>
    )
}