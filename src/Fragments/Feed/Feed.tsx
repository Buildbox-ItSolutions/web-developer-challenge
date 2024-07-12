import {useContext} from "react";
import {FeedContext} from "../../Contexts/FeedContext.tsx";
import {CardFeed} from "../../components/Card";
import {useAutoAnimate} from "@formkit/auto-animate/react";

export const FeedFragment = () => {
    const { feeds } = useContext(FeedContext)
    const [parent] = useAutoAnimate()

    return <div ref={parent}>
            {feeds.map((feed, idx)=>{
                return <CardFeed key={idx} {...feed}/>
            })}
        </div>
}
