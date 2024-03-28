import CreatePost from "../../components/CreatePost";
import Post from "../../components/Post";
import useStore from "../../store/posts";
import { MainS, ContainerS, H1S } from "./style";


export default function MainPage() {

    const { posts, deletePost } = useStore()

    return (
        <MainS>
            <ContainerS>

                <CreatePost />

                <H1S>Feed</H1S>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {
                        posts.reverse().map((post, index) => <Post postData={post} key={index} deleteFunction={deletePost} index={index} />)
                    }
                </div>

            </ContainerS>
        </MainS>
    )
}