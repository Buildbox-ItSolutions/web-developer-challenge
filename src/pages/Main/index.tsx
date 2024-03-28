import CreatePost from "../../components/CreatePost";
import Post from "../../components/Post";
import { MainS, ContainerS, H1S } from "./style";


export default function MainPage() {

    return (
        <MainS>
            <ContainerS>

                <CreatePost />

                <H1S>Feed</H1S>

                <Post/>
            </ContainerS>
        </MainS>
    )
}