import styled  from "styled-components";
import { memo } from "react";

import Delete from "assets/delete.svg";
import { InPost } from "pages/Main";
const Wrap = styled.div`
    padding: 2rem;
    margin-bottom: 3rem;
    width: 500px;
    height: 200px;
    min-height: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: var(--gray-900);
    box-shadow: 0 0 0.035rem white;
`;
const Content = styled.div`
    // width: 516px;
    // height: 353px;
    // margin: 40px 425px 56px;
    // padding: 24px;
    // border-radius: 3px;
    // border: solid 1px #3b3b3b;
    // background-color: #313131;
    
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;
const Description = styled.div`
    margin-left: 1rem;
    display: flex;
    width: 100%;
    height: 80%;
    flex-direction: column;
    justify-content: space-between;
    
    
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    text-align: left;
    color: #9f9f9f;

`;
const Author = styled.p`
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    text-align: left;
    color: #7a7a7a;
`;
const Img = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 35px;
    @media (max-width: 500px) {
        width: 60px;
        height: 70px;
        border-radius: 25px;
    }
    @media (max-width: 400px) {
        width: 60px;
        height: 70px;
        border-radius: 25px;
    }
`;
const IconRemove = styled.img`
    height: 25px;
    cursor: pointer;
    @media (max-width: 500px) {
        height: 15px;
    }
`;
const WrapIcon = styled.div`
    height: 100%;
    width: 30px;
    display: flex;
    @media (max-width: 500px) {
        width: 20px;
    }
`;

const SpanPost = styled.span`
    width: 66px;
    height: 14px;
    font-family: Roboto;
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: 0.29px;
    text-align: left;
    color: #5f5f5f;
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
            <Wrap>
                <Content>
                    <Img src={photo} alt={''}/>
                    <Description>
                        <p>{message}</p>
                        <div>
                            <SpanPost>Enviada por</SpanPost>
                            <Author>{name}</Author>
                        </div>
                    </Description>
                </Content>
                <WrapIcon>
                    <IconRemove onClick={() => deletePost(data)}
                        src={Delete} alt={''}/>
                </WrapIcon>
            </Wrap>
        </>
    );
  },
  (next, prev) => next.data === prev.data
);
