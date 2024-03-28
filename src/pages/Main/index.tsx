import CreatePost from "../../components/CreatePost";
import Post from "../../components/Post";
import useStore from "../../store/posts";
import { MainS, ContainerS, H1S } from "./style";


export default function MainPage() {

    const {posts} = useStore()

    console.log(posts)

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