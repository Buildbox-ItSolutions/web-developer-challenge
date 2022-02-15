import React from "react";
import { Feed } from "../Feed";
import { NewPost } from "../NewPost";
import * as S from './styles'

export function Main(){
    return (
        <S.Container>
            <NewPost />
            <Feed />
        </S.Container>
    )
}