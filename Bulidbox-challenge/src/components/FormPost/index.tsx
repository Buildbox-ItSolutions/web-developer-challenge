import React, { useState } from 'react';
import ButtonForm from '../ButtonForm';
import InputField from '../InputForm';
import { useForm } from 'react-hook-form';

export type Post = {
    username: string;
    description: string;
    photo: string;
};

type FormPostProps = {
    posts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
};

const FormPost: React.FC<FormPostProps> = ({ posts, setPosts }) => {
    const { register, handleSubmit, reset } = useForm<Post>();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const onSubmit = (data: Post) => {
        if (selectedFile) {
            const reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onloadend = () => {
                const base64data = reader.result as string;
                setPosts(prevPosts => [...prevPosts, { ...data, photo: base64data }]);
                reset();
                setSelectedFile(null);
            };
        } else {
            setPosts(prevPosts => [...prevPosts, data]);
            reset();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setSelectedFile(event.target.files[0]);
        }
    };

    return (
        <div className='my-12 flex items-center border-b-[0.2px] border-zinc-700 pb-12 justify-center'>
            <div className='border border-zinc-700 rounded-sm bg-white bg-opacity-5 py-4' style={{ width: '600px' }}>
                <h1 className='text-2xl font-bold text-center'>Formulario de Post</h1>
                <div className='flex justify-center mt-10'>
                    <label htmlFor="photo-upload">
                        <img className='rounded-full cursor-pointer' src={selectedFile ? URL.createObjectURL(selectedFile) : "/src/assets/icon-img.png"} width={90} alt="" />
                    </label>
                    <input
                        id="photo-upload"
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                    />
                </div>
                <div className='flex flex-col justify-center items-center mt-6 px-6'>
                    <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                        <InputField
                            label="Nome de usuário"
                            type="text"
                            name="username"
                            register={register}
                        />
                        <InputField
                            label="Mensagem"
                            type="text"
                            name="description"
                            register={register}
                        />
                        <div className='flex justify-end px-6'>
                            <button
                                type="button"
                                className='my-4 py-1 px-3 underline text-sm rounded-xl'
                                onClick={() => {
                                    reset();
                                    setSelectedFile(null);
                                }}
                            >
                                descartar
                            </button>
                            <ButtonForm />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormPost;
