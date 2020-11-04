import { FC } from 'react';

import {
    Author,
    Card,
    DeleteIcon,
    DeletePost,
    Message,
    ProfilePicture,
    ProfilePictureWrapper
} from './styles';

interface Props {
    profilePic: string;
    message: string;
    autor: string;
    hendleDelete: (id: string) => void;
    id: string;
}

const CardComponent: FC<Props> = ({ autor, message, profilePic, hendleDelete, id }) => {
    return (
        <Card>
            <DeletePost>
                <DeleteIcon
                    src="/delete.svg"
                    onClick={() => hendleDelete(id)}
                    data-test="card-delete-button"
                />
            </DeletePost>
            <ProfilePictureWrapper>
                <ProfilePicture src={profilePic} />
            </ProfilePictureWrapper>
            <Message data-test="card-message">{message}</Message>
            <Author>
                <small>Enviado por</small>
                <strong data-test="card-author">{autor}</strong>
            </Author>
        </Card>
    );
};

export default CardComponent;
