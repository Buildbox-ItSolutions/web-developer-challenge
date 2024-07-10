import React, { ChangeEvent, FormEvent, useState } from 'react';
import ButtonForm from '../ButtonForm';
import InputField from '../InputForm';

export type Post = {
    username: string;
    description: string;
};

type FormPostProps = {
    posts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
};

const FormPost: React.FC<FormPostProps> = ({ posts, setPosts }) => {
    const [formData, setFormData] = useState<Post>({
        username: '',
        description: ''
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newPost = { ...formData }; 
        setPosts([...posts, newPost]); 
        setFormData({ username: '', description: '' }); 
    };
    

    const handleDiscard = () => {
        setFormData({ username: '', description: '' }); 
    };

    return (
        <div className='my-10 flex items-center justify-center'>
            <div className='border border-zinc-700 rounded-sm p-2' style={{ width: '600px' }}>
                <h1 className='text-2xl font-bold text-center'>Formulario de Post</h1>
                <div className='flex justify-center mt-10'>
                    <img className='rounded-full' src="/src/assets/icon-img.png" width={90} alt="" />
                </div>
                <div className='flex flex-col justify-center items-center mt-6 px-6'>
                    <form onSubmit={handleSubmit} className='w-full'>
                        <InputField
                            label="Nome de usuário"
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Mensagem"
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                        <div className='flex justify-end px-6'>
                            <button
                                type="button"
                                className='my-4 py-1 px-3 underline text-sm rounded-xl'
                                onClick={handleDiscard}
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
