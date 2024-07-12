import styled from "styled-components";
import { IoCloseCircleOutline } from "react-icons/io5";


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
    margin: 1rem 1rem 0 0;
`;

const Image = styled.img`
    width: 16vh;
    height: 16vh;

    border-radius: 20px;
    border: 1px solid #4B4B4B;

    object-fit: cover;
`;

const ImageEncolsure = styled.div`
    margin: 0 4%;
`;

const SentBy = styled.span``;

export default function Post(props: PostProps) {
    return (
        <PostArticle key={props.Id}>
            <Delete>
                <IoCloseCircleOutline size='40px' color="#D65923" onClick={props.RemovePost!} />
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