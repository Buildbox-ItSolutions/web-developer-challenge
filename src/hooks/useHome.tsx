import { yupResolver } from '@hookform/resolvers/yup'
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { GlobalContext } from './context/GlobalState'

export interface dataProps {
    id: number
    image: File
    name: string
    description: string
}

function useHome() {
    const [selectedImage, setSelectedImage] = useState<Blob | MediaSource | Blob | MediaSource | undefined>()
    const [state, dispatch] = useContext(GlobalContext)

    const {
        register,
        getValues,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver<yup.AnyObjectSchema>(validationSchema()),
    })

    console.log(errors)

    function saveData() {
        if (selectedImage) {
            setValue('image', selectedImage)
            const { image, name, description } = getValues()

            dispatch({
                type: 'ADD_GALLERY',
                payload: { name, description, image },
            })

            cleanup()
        }
    }

    const deleteGallery = (id: number) => {
        dispatch({
            type: 'DELETE_GALLERY',
            payload: id,
        })
    }

    const cleanup = () => {
        setSelectedImage(undefined)
        Object.keys(getValues()).map((n) => {
            setValue(n, '')
        })
    }

    return {
        setSelectedImage,
        register,
        handleSubmit,
        saveData,
        cleanup,
        selectedImage,
        errors,
        state,
        deleteGallery,
    }
}

export default useHome

const validationSchema = () =>
    yup.object().shape({
        name: yup.string().required('Nome é obrigatório!'),
        description: yup.string().required('Descrição é obrigatório!'),
    })
