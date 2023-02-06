import {
  ButtonComponent,
  TextAreaComponent,
  TextFieldComponent,
  SelectImageComponent,
} from '@components/index';

import * as Styles from './styles';
import { useSubmitForm } from './useSubmitForm';

export function FormComponent() {
  const {
    errors,
    isValid,
    register,
    isSubmitting,
    handleSubmit,
    thumbnailUrl,
    handleChangeFile,
    handleSubmitForm,
    handleClearAllFields,
    handleDeleteThumbnail,
  } = useSubmitForm();

  return (
    <Styles.Form onSubmit={handleSubmit(handleSubmitForm)}>
      <Styles.Header>
        <SelectImageComponent
          id="thumbnail"
          htmlFor="thumbnail"
          onChange={handleChangeFile}
          thumbnailSource={thumbnailUrl}
          onDeleteThumbnail={() => handleDeleteThumbnail()}
        />
      </Styles.Header>

      <Styles.Body>
        <TextFieldComponent
          type="text"
          error={!!errors.name}
          placeholder="Digite seu nome"
          message={String(errors.name?.message)}
          {...register('name', {
            required: 'O campo de nome é obrigatório...',
          })}
        />

        <TextAreaComponent
          rows={4}
          placeholder="Mensagem"
          error={!!errors.message}
          message={String(errors.message?.message)}
          {...register('message', {
            required: 'O campo de mensagem é obrigatório...',
          })}
        />
      </Styles.Body>

      <Styles.Footer>
        <ButtonComponent
          type="button"
          title="Descartar"
          variant="outline"
          onClick={handleClearAllFields}
          arial-label="Botão para resetar os campos do formúlario"
        />

        <ButtonComponent
          type="submit"
          title="Publicar"
          variant="contained"
          disabled={!isValid}
          loading={isSubmitting}
          arial-label="Botão para enviar os dados do banco de dados"
        />
      </Styles.Footer>
    </Styles.Form>
  );
}
