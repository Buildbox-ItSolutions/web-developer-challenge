import styled from 'styled-components'
import { FeedListSpan } from '../styles'
import { Feed } from './Feed'

export const FeedList = ({ feedList, setFeedList }) => {

    feedList.sort((a, b) => b.id - a.id)

    const onDelete = (id) => {
        const resultList = feedList.filter(feed => feed.id !== id)
        setFeedList(resultList)
    }


    return (
        <div>
            <FeedListSpan>
                Feed
            </FeedListSpan>

            {feedList && feedList.map((feed) => (
                <Feed key={feed.id} feed={feed} onDelete={onDelete} />
            ))}
        </div>
    )
}
