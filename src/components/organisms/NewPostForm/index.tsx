import Button from 'components/atoms/Button';
import Card from 'components/atoms/Card';
import Icon from 'components/atoms/Icon';
import Input, { HTMLInputType } from 'components/atoms/Input';
import TextArea, { HTMLTextAreaType } from 'components/atoms/TextArea';
import ImageInput from 'components/molecules/ImageInput';
import React from 'react';
import styled from 'styled-components';
import { ThemeSpacing } from 'styles/theme';

export interface NewPostFormProps {
  image?: string;
  onChangeImage: HTMLInputType['onChange'];
  onPublish: () => void;
  onDiscard: () => void;
  onDeleteImage: () => void;
  disablePost?: boolean;
  name: string;
  description: string;
  onChangeName: HTMLInputType['onChange'];
  onChangeDescription: HTMLTextAreaType['onChange'];
  marginBottom?: ThemeSpacing;
}

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing[5]};
`;

function NewPostForm({
  image,
  onChangeImage,
  onPublish,
  onDiscard,
  disablePost,
  name,
  description,
  onChangeName,
  onChangeDescription,
  onDeleteImage,
  marginBottom
}: NewPostFormProps) {
  return (
    <Card marginBottom={marginBottom}>
      <ImageContainer>
        <ImageInput
          image={image}
          onChange={onChangeImage}
          marginRight={image ? '6' : '0'}
        />
        {image && (
          <Icon name="FaTrash" color="orange" onClick={onDeleteImage} />
        )}
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
        >
          Descartar
        </Button>
        <Button onClick={onPublish} disabled={disablePost}>
          Publicar
        </Button>
      </Buttons>
    </Card>
  );
}

NewPostForm.defaultProps = {
  image: undefined,
  disablePost: false,
  marginBottom: '0'
};

export default NewPostForm;
