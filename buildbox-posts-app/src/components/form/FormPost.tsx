import { useForm, SubmitHandler } from 'react-hook-form';
import * as S from '../indexStyles';
import DefaultPicture from '../Picture/DefaultImg';
type InputProps = {
    picture: FileList,
    name: string,
    message: string,
}

export default function FormPost() {
    const { handleSubmit, register } = useForm<InputProps>();

    const onSubmit: SubmitHandler<InputProps> = (data) => {
        console.log('🚀  data:', data);
    }
    return (
        <>
            <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
                <S.InputContainer>
                    {/* <S.InputFile
                        {...register("picture")}
                        type="file"
                    /> */}
                    <DefaultPicture />
                    <S.Input
                        placeholder='Digite seu nome'
                        {...register("name")}
                        type="text"
                    />
                    <S.TextArea
                        {...register("message")}
                        placeholder='Mensagem'
                        rows={6}

                    />
                    <S.BtnContainer>
                        <S.BtnDiscard type="button">Descartar</S.BtnDiscard>
                        <S.BtnSubmit
                            type="submit"
                        // disabled
                        >
                            Publicar
                        </S.BtnSubmit>
                    </S.BtnContainer>
                </S.InputContainer>
            </S.FormContainer>
        </>
    )
}