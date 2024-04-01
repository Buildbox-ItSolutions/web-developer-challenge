import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Button, ImageUploader, Input, TextArea } from "..";
import { size, uniqueId } from "lodash";
import { Post } from "../../types/post.types";
import { ButtonsContainer, Container, Form } from "./styles";

interface Props {
  handleAddPost: (newPost: Post) => void;
}

function PostPublisher({ handleAddPost }: Props) {
  const form = useForm<Post>();

  const onSubmit: SubmitHandler<Post> = (data) => {
    handleAddPost({ ...data, id: uniqueId("post") });
    form.reset();
  };

  return (
    <Container>
      <FormProvider {...form}>
        <Form onSubmit={form.handleSubmit(onSubmit)}>
          <ImageUploader />

          <Input
            placeholder="Digite seu nome"
            {...form.register("name", { required: true })}
          />

          <TextArea
            placeholder="Mensagem"
            {...form.register("message", { required: true })}
          />

          <ButtonsContainer>
            <Button variant="underlined" onClick={() => form.reset()}>
              Descartar
            </Button>
            <Button
              type="submit"
              disabled={
                !form.formState.isValid ||
                size(form.formState.touchedFields) === 0
              }
            >
              Publicar
            </Button>
          </ButtonsContainer>
        </Form>
      </FormProvider>
    </Container>
  );
}

export default PostPublisher;
