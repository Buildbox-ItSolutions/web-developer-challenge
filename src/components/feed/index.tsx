import { AuthorBox, AuthorText, BoxForm, CircularImage, Content, ContentContainer, DeleteButton, MadeBy, MessageBox, MessageText } from "./style";

interface Feed {
    autor: string,
    img: string,
    img_name: string,
    mensagem: string
}

interface IProps {
    feed: Feed
}

const FeedList = ({feed}: IProps) => {
    return (
        <BoxForm>
            <DeleteButton>
                <img src="/delete.svg" alt="Delete" />
            </DeleteButton>
            
            <ContentContainer>
                <CircularImage>
                    <img src={feed.img} style={{borderRadius: '36px'}} width="88px" height="88px" alt={feed.img_name} />
                </CircularImage>
                
                <Content>
                    <MessageBox>
                        <MessageText>{feed.mensagem}</MessageText>
                    </MessageBox>
                    
                    <AuthorBox>
                        <MadeBy>Enviado por</MadeBy>
                        <AuthorText>{feed.autor}</AuthorText>
                    </AuthorBox>
                </Content>

            </ContentContainer>

        </BoxForm>
    );
}

export default FeedList;