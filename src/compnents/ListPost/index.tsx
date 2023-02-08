import { Container, PostsContainer, Post, ButtonRemovePost } from "./styles"
import { usePost } from '../../hooks/usePost'
import deletIcon from '../../assets/delete.svg';

export default function ListPost() {
    const { posts, removePost } = usePost();

    return (
        <Container>
            <label>Feed</label>

            <PostsContainer>
                {posts.map((post, index) =>
                    <Post key={index}>
                        <ButtonRemovePost
                            className="btn"
                            onClick={() => removePost(index)}
                            title='Remover post'
                        >
                            <img src={deletIcon} alt="Icone remover" />
                        </ButtonRemovePost>

                        <div className="content-post">
                            <img className="imagem-post" src={post.imagem} alt="Imagem do post" />
                            <div>
                                <p className="mensagem">
                                    {post.mensagem}
                                </p>
                                <div>
                                    <span style={{ fontSize: '0.75rem', color: '#5f5f5f' }}>Enviado por</span><br />
                                    <span style={{ fontSize: '0.875rem' }}>{post.nome}</span>
                                </div>
                            </div>
                        </div>
                    </Post>
                )}
                {posts.length === 0 && <span>Sem publicações!</span>}
            </PostsContainer>
        </Container>
    )
}