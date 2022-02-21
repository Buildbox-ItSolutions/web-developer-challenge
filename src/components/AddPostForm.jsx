import React, { useState } from 'react';
import styled from 'styled-components';
import { GlobalWrapper } from '../GlobalWrapper';   
import { v4 as uuidv4 } from 'uuid';
import thumb from "../img/photo-base.png"

const AddPostForm = ({posts, addPostList}) => {
    const [inputPost, addInputPost] = useState('');
    const [textPost, addTextPost] = useState('');

    const handleInputPost = (e) => {
        addInputPost(e.target.value);
    }

    const handleTextPost = (e) => {
        addTextPost(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(inputPost  === "" && textPost === ""){
            return;
        }
        let newPosts = [...posts,
            // spread operator array ES6
            // uuidv4() return a unique ID 
            {
                id: uuidv4(),
                name: inputPost,
                text: textPost
            }
        ]
        //handle order posts in feed 
        let removeLastArrayElement = newPosts.pop()
        newPosts.unshift(removeLastArrayElement)
        
        addPostList(newPosts)


        // addPostList(
        //     // spread operator array ES6
        //     // uuidv4() return a unique ID 
        //     [...posts,
        //          {
        //              id: uuidv4(),
        //              name: inputPost,
        //              text: textPost
        //          }
        //     ]
        // )
    }

    const resetForm = () => {
        addInputPost('');
        addTextPost('');
    }

  return (
    <section>
        <GlobalWrapper>
            <FormAddPost>
                <form action="" onSubmit={(e) => handleSubmit(e)}>
                    <div className="formPost">
                        <img src={thumb} alt="" />
                        <input 
                            type="text" 
                            placeholder="Digite seu Nome"
                            value={inputPost}
                            onChange={(e) => handleInputPost(e)}
                        />
                        <textarea 
                            name=""
                            placeholder="Mensagem"
                            value={textPost}
                            onChange={(e) => handleTextPost(e)}
                        >
                            
                        </textarea>
                    </div>
                    <div className="btn-form">
                        <button 
                            type='reset'
                            onClick={() => resetForm()}
                            className="btn-reset"
                        >
                            Descartar
                        </button>
                        <button
                            type='submit'
                            className="btn-send"
                        >
                            Publicar
                        </button>
                    </div>
                </form>
            </FormAddPost>
        </GlobalWrapper>
    </section>
  )
}

const FormAddPost = styled.div`
    width: 38%;
    height: 353px;
    margin: 40px 0 56px;
    padding: 24px;
    border-radius: 3px;
    border: solid 1px #3b3b3b;
    background-color: #313131;
    
    input,textarea{
        color: #9f9f9f
    }

    img{
        width: 88px;
        height: 88px;
        margin:auto;
        object-fit: contain;
        border-radius: 36px;
        border: solid 1px #4b4b4b;
        background-color: rgba(75, 75, 75, 0);
    }

    .formPost{
        display: flex;
        flex-direction: column;
        justify-content: center;

        input[type="text"]{
            width: 100%;
            // max-width: 468px;
            height: 40px;
            margin: 16px 0 8px;
            padding: 12px 12px 12px 16px;
            border-radius: 8px;
            border:1px solid #494949;
            background-color: #494949;
        }

        textarea{
            width:100%;
            // max-width: 468px;
            min-width: 100%;
            max-height: 80px;
            min-height: 80px;
            margin: 8px 0 32px;
            padding: 12px 12px 1px 16px;
            border-radius: 8px;
            background-color: #494949;
            border:1px solid #494949;
        }
    }

    .btn-form{
        display:flex;
        justify-content:flex-end;   

        .btn-reset{
            width: 60px;
            height: 17px;
            background:none;
            border:none;
            cursor:pointer;
            font-family: Roboto;
            font-size: 0.875rem;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.29;
            letter-spacing: normal;
            margin: 12px 24px 12px 0; 
            text-align: center;
            text-decoration: underline;
            color: #5f5f5f;
        }

        .btn-send{
            width: 98px;
            height: 41px;
            padding: 12px 24px;
            border:1px solid #5f5f5f;
            border-radius: 8px;
            background-color: #5f5f5f;
            cursor:pointer;
            font-family: Roboto;
            font-size: 0.875rem;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.29;
            letter-spacing: normal;
            text-align: center;
            color: #313131;
        }
    }

    @media only screen and (max-width:1023px){
        width: 50%;
    }

    @media only screen and (max-width:768px){
        width: 70%;
    }
`;

export default AddPostForm