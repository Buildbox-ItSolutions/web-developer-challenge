import { useForm, SubmitHandler } from 'react-hook-form';
// import styled from 'styled-components';

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
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("picture")}
                    type="file"
                />
                <input {...register("name")} type="text" />
                <textarea
                    {...register("message")}
                    placeholder='Digite sua mensagem aqui...'
                    rows={4}
                    cols={50}
                />
                <button type="button">Descartar</button>
                <button type="submit">Publicar</button>
            </form>
        </>
    )
}