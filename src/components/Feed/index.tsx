import { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import * as F from "./style";
import FeedPost from "../Post";

import { Post } from "../../types/Post";
type Props = {
    Posts: Post[],
    HandleDelete: (documentId: string, imageName: string) => void
}

export default function Feed({ Posts, HandleDelete }: Props) {
    const [showPosts, setShowPosts] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowPosts(true);
        }, 5000)
    }, []);

    return (
        <>
            {Posts.length > 0 &&
                <>
                    <F.FeedSection>Feed</F.FeedSection>
                    {Posts &&
                        <TransitionGroup component={F.FeedArea} appear={true}>
                            {Posts.map((item: Post, index: number) => (
                                <CSSTransition
                                    key={index}
                                    in={true}
                                    timeout={300}
                                    classNames="transition"
                                >
                                    <FeedPost Data={item} HandleDelete={HandleDelete} />
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    }
                </>
            }
        </>


    )
}