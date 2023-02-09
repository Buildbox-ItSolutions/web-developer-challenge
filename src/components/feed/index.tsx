import { AuthorBox, AuthorText, BoxForm, CircularImage, Content, ContentContainer, DeleteButton, DeleteDiv, MadeBy, MessageBox, MessageText } from "./style";

interface Feed {
    autor: string,
    img: string,
    img_name: string,
    mensagem: string
}

interface IProps {
    feed: Feed,
    deleteFeed: any,
    index: number
}

const FeedList = ({feed, deleteFeed, index}: IProps) => {

    return (
        <BoxForm>
            <DeleteDiv>
                <DeleteButton onClick={() => deleteFeed(index)}>
                    <img src="/delete.svg" alt="Delete" />
                </DeleteButton>
            </DeleteDiv>
            
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