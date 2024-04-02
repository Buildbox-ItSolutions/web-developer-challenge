import CardFeed from "../cardfeed/CardFeed"
import { Titulo } from "./Styles"
import IPost from "../../interfaces/IPost";

const Feed: React.FC<{ data: IPost }> = ({ data }) => {
    return (
        <div>
            <Titulo>
                Feed
            </Titulo>
            {data.posts.map((post: { id: string | number; foto: string; texto: string; autor: string; }) => (
                <div>
                    <CardFeed 
                        id={post.id} 
                        foto={post.foto} 
                        texto={post.texto} 
                        autor={post.autor}
                    />
                </div>
            ))}
        </div>
    )
}

export default Feed