import { useForm } from "react-hook-form";
import { styled } from "../style";
import { Box } from "./Box";

type PostForm = {
    avatar: string
    name: string
    content: string
}

const Label = styled("label", {})

const Input = styled('input', {

})
const Textarea = styled('textarea', {})

type PostProps = {
    onPosts: ({ avatar, content, name }: PostForm) => void
}

export function FormPost({ onPosts }: PostProps) {
    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<PostForm>()

    return (
        <Box>
            <form onSubmit={handleSubmit(onPosts)}>
                <Label htmlFor="">
                    <Input type="file" {...register('avatar')} />
                </Label>
                <Input type="text" {...register('name')} />
                <Textarea {...register('content')} />
                <div>
                    <button>descarta</button>
                    <button type="submit" disabled={isSubmitting}>publicar</button>
                </div>
            </form>

        </Box>
    )
}