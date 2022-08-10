import styled  from "styled-components";
import { memo } from "react";

import Delete from "assets/Delete.svg";
import { InPost } from "pages/Main";
const Content = styled.div`
    width: 516px;
    height: 353px;
    margin: 40px 425px 56px;
    padding: 24px;
    border-radius: 3px;
    border: solid 1px #3b3b3b;
    background-color: #313131;
`;
interface InPostData {
    data: InPost;
    deletePost: (post: InPost) => void;
  }

export const Posts = memo(
  ({ data, deletePost }: InPostData) => {
    const { message, name, photo } = data;

    return (
        <>
            <Content>
                <img src={photo} alt={''}/>
                <div className="description">
                    <p>{message}</p>
                    <div>
                        <span>Enviada por</span>
                        <p>{name}</p>
                    </div>
                </div>
            </Content>
            <div className="align-icon">
                <img onClick={() => deletePost(data)}
                    className="delete-icon"
                    src={Delete} alt={''}/>
            </div>
        </>
    );
  },
  (next, prev) => next.data === prev.data
);
