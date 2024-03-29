import React, { useContext } from "react";
import { Header } from "./HomePage/Header";
import styles from './style.module.scss';
import { Input } from "./HomePage/Forms/Input";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from './formSchema';
import imgIcon from "../assets/image.svg";
import trash from "../assets/trash.svg";
import { Textarea } from "./HomePage/Forms/Textarea";
import { PostCard } from "./HomePage/PostCard";
import { PostsContext } from "../providers/PostsContext";

export const HomePage = () => {
    const { register, handleSubmit, formState: { errors }, reset, } = useForm({
        resolver: zodResolver(formSchema),
    });

    const { postList, createPost, inputValues, setInputValues, selectedImage, setSelectedImage } = useContext(PostsContext);

    const handleImageChange = (event) => {
        const iconFile = event.target.files[0];

        if (iconFile) {
            const iconUrl = URL.createObjectURL(iconFile);
            setSelectedImage(iconUrl);
        }
    };

    const handleClear = () => {
        setSelectedImage(null);
        reset();
    };

    const submit = (formData) => {
        createPost({
            id: postList.length + 1,
            name: formData.name,
            message: formData.message,
            icon: selectedImage
        });
        setSelectedImage(null);
        reset();
    };


    return (
        <>
            <Header />
            <main>
                <div className={styles.formContainer}>
                    <form onSubmit={handleSubmit(submit)} noValidate>
                        <div className={styles.imgInput}>
                            <div className={styles.imgButton} >
                                <input type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    style={{ display: 'none' }}
                                    id="icon-input"
                                />
                                <label htmlFor="icon-input">
                                    {selectedImage ? (
                                        <div className={styles.iconImport}>
                                            <img src={selectedImage} className={styles.userImg} alt="Ícone" />
                                            <button className={styles.trash} onClick={() => setSelectedImage(null)}>
                                                <img src={trash} alt="Lixeira" />
                                            </button>
                                        </div>
                                    ) : (
                                        <div className={styles.iconSystem}>
                                            <img className={styles.iconImg} src={imgIcon} alt="Ícone Vazio"
                                            />
                                        </div>
                                    )}
                                </label>
                            </div>
                        </div>
                        <Input
                            placeholder="Digite seu nome"
                            type="text"
                            {...register("name")}
                            error={errors.name}
                        />
                        <Textarea
                            placeholder="Mensagem"
                            type="text"
                            wrap="hard"
                            {...register("message")}
                            error={errors.message}
                        />
                        <div className={styles.buttonsContainer}>
                            <button className={styles.descartButton} type="button" onClick={handleClear}>Descartar</button>
                            <button className={styles.publishButton} type="submit">Publicar</button>
                        </div>
                    </form>
                </div>
                <div className={styles.feedContainer}>
                    <h1>Feed</h1>
                    <ul className={styles.feedList}>
                        {postList.length > 0 ?

                            postList.map((post) => (
                                <PostCard key={post.id} post={post} />
                            ))

                            :

                            <h1 className={styles.feedEmpty}>Ainda não há posts para serem exibidos</h1>
                        }

                    </ul>
                </div>
            </main>
        </>
    );
}