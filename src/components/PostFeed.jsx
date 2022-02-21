import React from 'react'
import styled from 'styled-components'
import thumb from "../img/photo-base.png";
import clickDel from "../img/delete.svg"

const PostFeed = ({id, name, text, deletePost}) => {
  return (
        <PostDiv>
            <button
                className="btn-del"
                onClick={() => deletePost(id)}
            >
                <img src={clickDel} alt="delete button"></img>
            </button>
            <img src={thumb} alt="text" className="img_post"/>
            <div className="core_post">
                <div className="p_post">
                    <p>{text}</p>
                </div>
                <div>
                    <h6 className="h_post">Enviado por</h6>
                    <p className="name_post">{name}</p>
                </div>
            </div>
        </PostDiv>
    
  )
}

const PostDiv = styled.div`
    display:flex;
    position:relative;
    width: 100%;
    height: auto;
    margin: 8px auto 16px;
    padding: 12px 12px 32px 24px;
    border-radius: 3px;
    border: solid 1px #3b3b3b;
    background-color: #313131;  
    
    .btn-del{
        position:absolute;
        top:12px;
        right:12px;
        background:transparent;
        border:none;
        cursor:pointer;
    }

    .img_post{
        max-width: 88px;
        height: 88px;
        margin: 40px 32px 16px 0;
        object-fit: contain;
        border-radius: 36px;
    }

    .core_post{
        margin-top: 40px;

        .p_post{
            padding-right: 8%;
            margin-bottom: 18px;
            color: #9f9f9f;
            font-family: Roboto;
            font-size: 1rem;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.25;
            letter-spacing: normal;
            text-align: left;
        }

        .h_post{
            font-family: Roboto;
            font-size: 12px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.33;
            letter-spacing: 0.29px;
            text-align: left;
            color: #5f5f5f;
        }

        .name_post{
            font-family: Roboto;
            font-size: 14px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.29;
            letter-spacing: normal;
            text-align: left;
            color: #7a7a7a;
        }
    }
`;

export default PostFeed