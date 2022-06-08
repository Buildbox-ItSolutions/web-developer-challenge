import Button from 'components/atoms/Button';
import Card from 'components/atoms/Card';
import Input, { HTMLInputType } from 'components/atoms/Input';
import TextArea, { HTMLTextAreaType } from 'components/atoms/TextArea';
import ImageInput from 'components/molecules/ImageInput';
import React from 'react';
import styled from 'styled-components';

export interface NewPostFormProps {
  image?: string;
  onChangeImage: HTMLInputType['onChange'];
  onPublish: () => void;
  onDiscard: () => void;
  buttonsDisabled?: boolean;
  name: string;
  description: string;
  onChangeName: HTMLInputType['onChange'];
  onChangeDescription: HTMLTextAreaType['onChange'];
}

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${props => props.theme.spacing[5]};
`;

function NewPostForm({
  image,
  onChangeImage,
  onPublish,
  onDiscard,
  buttonsDisabled,
  name,
  description,
  onChangeName,
  onChangeDescription
}: NewPostFormProps) {
  return (
    <Card>
      <ImageContainer>
        <ImageInput image={image} onChange={onChangeImage} />
      </ImageContainer>
      <Input
        marginBottom="4"
        placeholder="Digite seu nome"
        maxLength={48}
        value={name}
        onChange={onChangeName}
      />
      <TextArea
        marginBottom="8"
        placeholder="Digite seu comentário"
        value={description}
        maxLength={180}
        onChange={onChangeDescription}
      />
      <Buttons>
        <Button
          onClick={onDiscard}
          color="transparent"
          active="transparent"
          disabledColor="transparent"
          textDecorationLine="underline"
          fontColor="gray_scale_7"
          disabled={buttonsDisabled}
        >
          Descartar
        </Button>
        <Button onClick={onPublish} disabled={buttonsDisabled}>
          Publicar
        </Button>
      </Buttons>
    </Card>
  );
}

NewPostForm.defaultProps = {
  image: undefined,
  buttonsDisabled: false
};

export default NewPostForm;
