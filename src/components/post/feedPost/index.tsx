"use client"
import CardPost from "../cardPost"
import { TagFeed } from "./style"

const FeedPost = () => (
    <TagFeed>
        <h2>Feed</h2>
        <ul>
            <CardPost/>
            <CardPost/>
            <CardPost/>
            <CardPost/>
        </ul>
    </TagFeed>
)

export default FeedPost