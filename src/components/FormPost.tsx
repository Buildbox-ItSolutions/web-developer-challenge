import { Controller, useForm } from "react-hook-form";
import { styled } from "../style";
import { Box } from "./Box";
import icon from '../assets/image.svg'
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";



const Form = styled('form', {
    display: 'flex',
    flexDirection: 'column',
    div: {
        display: 'flex',
        justifyContent: 'end',
        marginTop: '32px'
    }
})
const Img = styled('img', {
    width: 122,
    height: 122,
    objectFit: 'contain',
    borderRadius: 'inherit',
})

const InputContainer = styled("label", {
    width: 121,
    height: 121,
    margin: '0 8px 16px 190px',

    borderRadius: 36,
    backgroundColor: '$warmGreyThree',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:has(input:disabled)': {
        opacity: 0.5,
        cursor: 'not-allowed',
    },
    'input[type="file"]': {
        all: 'unset',
        border: "none",
        background: "transparent",
        display: "none",

    },
    [`&:has(${Img})`]: {
        background: "transparent",
    },


})



const Input = styled('input', {
    all: 'unset',
    margin: "16px 0 8px",
    borderRadius: "8px",
    backgroundColor: "#494949",
    padding: '12px'
})
const Textarea = styled('textarea', {
    all: 'unset',
    height: "80px",
    borderRadius: "8px",
    backgroundColor: "#494949",
    padding: '12px'
})
const ButtonDescant = styled('button', {
    all: 'unset',
    width: "60px",
    height: "17px",
    margin: "12px 24px 12px 0",
    fontFamily: "Roboto",
    fontSize: "14px",
    textAlign: "center",
    color: "$warmGreyThree",
    textDecoration: "underline",
    cursor: "pointer",
    '&:disabled': {
        cursor: 'not-allowed',
    }
})
const ButtonSubmit = styled('button', {
    width: "98px",
    height: "41px",
    margin: "0 0 0 24px",
    padding: "12px 24px",
    border: 0,
    borderRadius: "8px",
    color: 'White',
    backgroundColor: "#71bb00",
    cursor: "pointer",

    '&:disabled': {
        color: "#313131",
        backgroundColor: "$warmGreyThree",
        cursor: 'not-allowed',
    }

})

const ValidFormSchema = z.object({
    avatar: z.string().min(1, {
        message: 'Não pode esta vazio'
    }),
    name: z.string().min(3, {
        message: 'o nome precisa no mínimo 3 caracteres'
    }),
    content: z.string().min(1, {
        message: 'Não pode esta vazio'
    }),
})

type PostForm = z.infer<typeof ValidFormSchema>

type PostProps = {
    onPosts: ({ avatar, content, name }: PostForm) => void
}



export function FormPost({ onPosts }: PostProps) {
    const [imagePreview, setImagePreview] = useState<string | null>(null)
    const [avatarImage, setAvatarImage] = useState<{ name: string } | null>(null)
    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
        control,
        reset,
    } = useForm<PostForm>({
        resolver: zodResolver(ValidFormSchema)
    })


    // eslint-disable-next-line @typescript-eslint/ban-types
    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>, onChange: Function) {
        const file = e.target.files && e.target.files[0];
        setAvatarImage(file)
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                onChange(event.target!.result as string);
                setImagePreview(event.target!.result as string);
            };
            reader.readAsDataURL(file);
        }
    }

    const handleDiscard = () => {
        reset();
        setImagePreview(null)
    };

    function handleSubmitForm(data: PostForm) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onPosts({ avatar: avatarImage!.name, content: data.content, name: data.name })
        handleDiscard()
    }



    return (
        <Box>
            <Form onSubmit={handleSubmit(handleSubmitForm)}>
                <InputContainer htmlFor="fileInput">
                    {imagePreview ? <Img src={imagePreview} alt="Preview" /> : <img src={icon} />}

                    <Controller
                        name="avatar"
                        control={control}
                        render={({ field: { onChange } }) => (
                            <input id="fileInput" type="file" onChange={(e) => handleFileChange(e, onChange)} />
                        )}
                    />

                </InputContainer>
                <Input type="text" {...register('name')} placeholder="Digite seu nome" />
                <Textarea {...register('content')} placeholder="Mensagem" />
                <div>
                    <ButtonDescant onClick={handleDiscard}>Descarta</ButtonDescant>
                    <ButtonSubmit type="submit" disabled={isSubmitting}>publicar</ButtonSubmit>
                </div>
                <span>preencha todo os campos para fazer seu post</span>
            </Form>

        </Box>
    )
}