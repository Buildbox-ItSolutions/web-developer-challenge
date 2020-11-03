import { ChangeEvent, FC, useState } from 'react';

import { submitProps } from '../Main';
import {
    CancelButton,
    Img,
    Input,
    ProfilePicture,
    Publisher,
    SubmitButton,
    Textarea,
    Wrapper,
    WrapperButton
} from './styles';

interface Props {
    handleSubmit: (props: submitProps) => void;
}

const PublisherComponent: FC<Props> = ({ handleSubmit }) => {
    const [profilePic, setProfilePic] = useState<null | string>(null);
    const [author, setAuthor] = useState('');
    const [message, setMessage] = useState('');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProfilePic(e.target.files[0] && URL.createObjectURL(e.target.files[0]));
    };

    const handleCancel = () => {
        setProfilePic(null);
        setMessage('');
        setAuthor('');
    };

    return (
        <Publisher
            data-test="publisher-form"
            onSubmit={(e) => {
                handleCancel();
                handleSubmit({ e, message, author, profilePic });
            }}>
            <Wrapper>
                <ProfilePicture>
                    <label htmlFor="file">
                        {profilePic ? (
                            <Img src={profilePic} alt="profile" width="100%" height="100%" />
                        ) : (
                            <Img src="image.svg" alt="profile" width="24px" height="24px" />
                        )}
                    </label>
                    <input type="file" id="file" name="file" onChange={onChange} accept="image/*" />
                </ProfilePicture>
                {profilePic !== null && (
                    <Img
                        src="/trash.svg"
                        alt="trash"
                        width="24px"
                        height="24px"
                        color="#353231"
                        onClick={() => setProfilePic(null)}
                    />
                )}
            </Wrapper>
            <Input
                placeholder="Digite seu nome"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
                data-test="publisher-input-name"
                name="name"
            />
            <Textarea
                placeholder="Mensagem"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={160}
                required
                name="message"
                data-test="publisher-textarea-msg"
            />
            <WrapperButton>
                <CancelButton onClick={handleCancel} type="reset">
                    Descartar
                </CancelButton>
                <SubmitButton data-test="publisher-btn-submit" type="submit">
                    Publicar
                </SubmitButton>
            </WrapperButton>
        </Publisher>
    );
};

export default PublisherComponent;
