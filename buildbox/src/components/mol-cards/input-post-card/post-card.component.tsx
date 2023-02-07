import { useEffect, useState } from "react";
import { Post } from "../../../hooks/use-update-feed";
import { SubimitButton } from "../../atm-button/button.component";
import { ButtonKind } from "../../atm-button/button.component.model";
import { InputFile } from "../../form-field/atm-input-file/input-file";
import { Input } from "../../form-field/atm-input/input.component";
import { InputTextArea } from "../../form-field/atm-text-area/text-area.component";
import { Separator } from "../../utils/separator.component";
import {
  ButtonContainer,
  ErrorMessage,
  InputPostCardStyled,
} from "./post-card.component.style";
import {
  postCardFormValidator,
  validatorInitialState,
} from "./post-card.utils";

enum SubimitType {
  Delete = "delete",
  Update = "update",
}

interface Form {
  name: { value: string };
  message: { value: string };
  image: { value: string };
  reset: () => void;
}

interface OnSubmit {
  (input: Omit<Post, "id">): void;
}

interface PostCardProps {
  onSubmit: OnSubmit;
}

export const InputPostCard: React.FunctionComponent<PostCardProps> = ({
  onSubmit,
}) => {
  const [post, setPost] = useState(formInitialState);
  const [disable, setDisable] = useState<boolean>(true);
  const [url, setUrl] = useState<string>("");
  const [validatorError, setValidatorError] = useState(validatorInitialState);
  const [subimitType, setSubmitType] = useState<SubimitType>(
    SubimitType.Update
  );

  useEffect(() => {
    if (disable && (post.name || post.message)) {
      setDisable(false);
      return;
    }
  }, [post]);

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPost((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setValidatorError(validatorInitialState);

    const target = e.target as any as Form;
    if (subimitType === SubimitType.Delete) {
      setUrl("");
      target.reset();
      return;
    }

    const [isName, isMessage, error] = postCardFormValidator(
      target.name.value,
      target.message.value
    );

    setValidatorError({
      message: !isMessage,
      name: !isName,
    });

    if (!error) {
      onSubmit({
        name: target.name.value,
        message: target.message.value,
        image: url,
      });
      setUrl("");
      setDisable(true);
      target.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputPostCardStyled>
        <InputFile name="image" onTakePicture={setUrl} url={url} />
        <Separator size="sm" />
        <Input
          placeholder="Digite o seu nome"
          name="name"
          onChange={handleOnChange}
        />
        {validatorError.name && (
          <ErrorMessage>O nome deve ter pelo menos 3 caractéries!</ErrorMessage>
        )}
        <Separator />
        <InputTextArea
          name="message"
          placeholder="Mensagem"
          onChange={handleOnChange}
        />
        {validatorError.message && (
          <ErrorMessage>
            A mensagem deve ter pelo menos 5 caractéries!
          </ErrorMessage>
        )}
        <Separator size="md" />

        <ButtonContainer>
          <SubimitButton
            children="Descartar"
            buttonKind={ButtonKind.Secondary}
            onClick={() => setSubmitType(SubimitType.Delete)}
          />
          <SubimitButton
            children="Publicar"
            disabled={disable}
            onClick={() => setSubmitType(SubimitType.Update)}
          />
        </ButtonContainer>
      </InputPostCardStyled>
    </form>
  );
};

const formInitialState = {
  name: "",
  message: "",
}