import React, { FormEvent } from 'react';
import "./style.css";

import { useState } from 'react';
import { ImageInput } from '../ImageButton/ImageInput';

interface ICommentPost{
    post: any[]
    onCreatePost: (post: any[]) => void;
}

export function FormContent({post, onCreatePost}: ICommentPost){

    const [comment, setComment] = useState('');
    const [name, setname] = useState('');
    const [image, setImage] = useState<string>(String);

    // const ref = React.useRef(null);

    function handleSubmit(e: FormEvent){
        e.preventDefault();
        console.log({name, comment, image});

        onCreatePost([...post, {name, comment, image}])

        setComment('');
        setname('');
        setImage('');

    }

    function handleDiscard(){
        
    }

    return(
        <>
            <form action="#" id="form" onSubmit={e => handleSubmit(e)}>
                <ImageInput 
                    image={image}
                    onImageUpload={setImage}
                />

                <input 
                name='nome' 
                type="text" 
                placeholder='Digite seu nome' 
                onChange={e => setname(e.target.value)}
                value={name}
                />

                <textarea 
                name="message" 
                id="message" 
                placeholder='Mensagem'
                onChange={e => setComment(e.target.value)}
                value={comment}
                >

                </textarea>

                <div className="wrapper--buttons">
                    <a href="#" onClick={handleDiscard}>Descartar</a>
                    <button 
                    type="submit" 
                    id='publicar'
                    disabled={(comment.length === 0) && (name.length === 0)}
                    >
                        Publicar
                    </button>
                </div>

            </form>
        </>
    );
}