import {createContext, useState} from "react";

export type FeedType = {
    id: string,
    nome: string,
    mensagem: string
    imagem: File
}

type FeedContextType = {
    feeds: FeedType[]
    addFeed: (feed: FeedType) => void
    removeFeed: (id: string) => void
}

export const FeedContext = createContext<FeedContextType>({addFeed: () => {}, removeFeed: () => {}, feeds: []})

export const FeedProvider = ({children}: {children: React.ReactNode}) => {
    const [feeds, setFeeds] = useState<FeedType[]>([])

    const feedContextDefaultValues: FeedContextType = {
        feeds: feeds,
        addFeed: (feed: FeedType) => setFeeds([...feeds, feed]),
        removeFeed: (id: string) => setFeeds(feeds.filter(feed => feed.id !== id))
    }

    return <FeedContext.Provider value={feedContextDefaultValues}>
        {children}
    </FeedContext.Provider>
}

