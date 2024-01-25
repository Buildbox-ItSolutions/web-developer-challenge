import React, { Dispatch } from 'react';
import {useDispatch} from 'react-redux';
import { 
    FeedItemContainer,
    Message,
    SendBy,
    Name,
    FeedItemImageContainer,
    FeedItemMessageContainer,
    FeedItemHeader,
    FeedItemBody,
    DeleteIcon
} from './styles';
import deletIcon from '../../assets/images/delete-icon.png';
import Image from '../Image';

type Props = {
    post: IPost
    removePost: (post: IPost) => void
};

const FeedItem:React.FC<Props> = ({ post, removePost }) => {
    const dispatch: Dispatch<any> = useDispatch();

    const deletePost = React.useCallback(
        (article: IPost) => dispatch(removePost(article)),
        [dispatch, removePost]
    );
    return (
        <FeedItemContainer>
            <FeedItemHeader>
                <DeleteIcon src={deletIcon} onClick={() => {deletePost(post);}} />
            </FeedItemHeader>
            <FeedItemBody>
                <FeedItemImageContainer>
                    <Image src={post.image} />
                </FeedItemImageContainer>
                <FeedItemMessageContainer>
                    <Message>
                        {post.message}
                    </Message>
                    <SendBy>Enviado por</SendBy>
                    <Name>{post.name}</Name>
                </FeedItemMessageContainer>
            </FeedItemBody>
        </FeedItemContainer>
    );
};

export default FeedItem;