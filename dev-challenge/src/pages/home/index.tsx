import React, { useEffect, useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import FeedItem from '../../components/feed-item';

export interface Message {
    name: string,
    message: string,
    image?: string
}

const initialMessages: Message[] = [];

const Home: React.FC = () => {
    const [inputName, setInputName] = useState('');
    const [inputMessage, setInputMessage] = useState('');
    const [inputFile, setInputFile] = useState('');
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [form, setForm] = useState<Message[]>(initialMessages);
    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = event.target;

        if (name === 'file-upload' && files && files.length > 0) {
            const imageUrl = URL.createObjectURL(files[0]);

            setForm((prevForm) => ({
                ...prevForm,
                image: imageUrl,
            }));
            setInputFile(value);
        } else {
            setForm((prevForm) => ({
                ...prevForm,
                [name]: value,
            }));
            setInputName(value);
        }
    };

    const handleChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target;

        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
        setInputMessage(value);
    };

    const submitRegister = (event: React.FormEvent) => {
        event.preventDefault();

        setMessages((prevMessages:any) => [...prevMessages, form]);
        setForm(initialMessages);
        setInputName('');
        setInputMessage('');
        setInputFile('');
    };

    const resetRegister = (event: React.FormEvent) => {
        setInputName('');
        setInputMessage('');
    }

    const deleteRegister = (index: number) => {
        const updatedMessages = [...messages];

        updatedMessages.splice(index, 1);
        setMessages(updatedMessages);
    }

    useEffect(() => {
        console.log('messages', messages);
    }, [messages]);

    useEffect(() => {
        console.log('form', form);
    }, [form]);

    return (
    <>
        <Header />
        <div className="max-w-[800px] mx-auto">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 box-main">
                <form onSubmit={submitRegister}>
                    <div>
                        <div className="mt-2.5">
                            <input
                                placeholder='imagem'
                                type="file"
                                id="file-upload"
                                name="file-upload"
                                required={true}
                                value={inputFile}
                                onChange={handleChangeInput}
                            />
                        </div>
                    </div>

                    <div>
                        <div className="mt-2.5">
                            <input
                                placeholder='Digite seu nome'
                                type="text"
                                name="name"
                                required={true}
                                onChange={handleChangeInput}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 input"
                                value={inputName}
                                />
                        </div>
                    </div>

                    <div>
                        <div className="mt-2.5">
                            <textarea
                                placeholder='Mensagem'
                                name="message"
                                required={true}
                                rows={4}
                                value={inputMessage}
                                onChange={handleChangeTextArea}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 input-text"
                                />
                        </div>
                    </div>

                    <div className="mt-2.5 flex justify-end space-x-4">
                        <button
                            onClick={resetRegister}
                            type='reset'
                            className="rounded-m px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 btn-delete"
                        >
                            Descartar
                        </button>

                        <button
                            type="submit"
                            className="rounded-md bg-[#5F5F5F] w-[98px] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Publicar
                        </button>
                    </div>
                </form>
            </div>

            <div className="grid grid-cols-1 box-feed">
                <h2 className="tracking-tight mb-2 mt-4 title-small">Feed</h2>
                {messages.map((item, index) => (
                    <FeedItem
                        key={index}
                        item={item}
                        index={index}
                        deleteHandler={deleteRegister}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    </>
    );
}

export default Home;
