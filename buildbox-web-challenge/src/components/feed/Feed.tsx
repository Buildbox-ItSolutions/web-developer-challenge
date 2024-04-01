import CardFeed from "../cardfeed/CardFeed"
import { Titulo } from "./Styles"

const Feed = () => {
    return (
        <div>
            <Titulo>
                Feed
            </Titulo>
            <div>
                <CardFeed />
                <CardFeed />
                <CardFeed />
                <CardFeed />
            </div>
        </div>
    )
}

export default Feed