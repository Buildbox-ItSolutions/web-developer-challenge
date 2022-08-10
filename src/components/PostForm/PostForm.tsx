import { useState } from "react";
import { Post } from "../../models/Post";
import {
  Card,
  InputText,
  TextArea,
  Button,
  InputImageFile,
} from '../../components';

import { Fields, Buttons, ImageField } from "./styles";

const DEFAULT_VALUES = {
  name: '',
  text: '',
  image: null,
  id: Math.random(),
};

interface PostFormProps {
  onPublish: (post: Post) => void;
};

const PostForm: React.FC<PostFormProps> = ({ onPublish }) => {
  const [values, setValues] = useState<Post>(DEFAULT_VALUES);
  const [toClearImage, setToClearImage] = useState<boolean>(false);

  const handleChange = (evt: React.BaseSyntheticEvent) => {
    const { value, name } = evt.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleImageSelect = (image: any) => {
    setToClearImage(false);
    setValues({
      ...values,
      image,
    }) 
  };

  const handlePublish = () => {
    onPublish(values);
    setToClearImage(true);
    setValues({
      ...DEFAULT_VALUES,
      id: Math.random(),
    });
  };

  const disabled = () => (
    !values.name || !values.text || !values.image
  )

  return (
    <Card>
      <ImageField>
        <InputImageFile
          onSelect={handleImageSelect}
          clearImage={toClearImage}
        />
      </ImageField>
      <Fields>
        <InputText
          name="name"
          placeholder="Digite seu nome"
          onChange={handleChange}
          value={values.name}
        />
        <TextArea
          name="text"
          placeholder="Mensagem"
          onChange={handleChange}
          value={values.text}
        />
      </Fields>

      <Buttons>
        <Button
          onClick={handlePublish}
          style="link"
        >
          Cancelar
        </Button>

        <Button
          onClick={handlePublish}
          disabled={disabled()}
        >
          Publicar
        </Button>
      </Buttons>
    </Card>
  );
};

export default PostForm;
