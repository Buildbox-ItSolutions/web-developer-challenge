import React from 'react'
import FeedItem from '../feed-item'
import { FeedProps } from './types'
import { Container } from './styles'

const Feed = ({ posts }: FeedProps) => {
    return (
        <Container>
            {posts.map((post, index) => <FeedItem key={`${post.id}${index}`} post={post} />)}
        </Container>
    )
}

export default Feed