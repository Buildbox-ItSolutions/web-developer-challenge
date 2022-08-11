import { useContext } from 'react'
import { ProviderContext } from '../../context/app-provider/provider'
import Header from '../../components/header'
import Post from '../../components/post'
import Feed from '../../components/feed'

const MainScreen = () => {
    const { posts } = useContext(ProviderContext)
    return (
        <>  
            <Header />
            <Post />
            <Feed posts={posts} />
        </>
    )
}

export default MainScreen