import CardFeed from "../cardfeed/CardFeed"
import { Titulo } from "./Styles"
import db from "../../../db.json";

const Feed = () => {
    return (
        <div>
            <Titulo>
                Feed
            </Titulo>
            {db.map((post) => (
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