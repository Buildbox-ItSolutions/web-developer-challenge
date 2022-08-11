import usePosts from '../../hooks/usePosts'
import Header from '../../components/header'
import Post from '../../components/post'
import Feed from '../../components/feed'

const MainScreen = () => {
    const { posts } = usePosts()
    return (
        <>  
            <Header />
            <Post />
            <Feed posts={posts} />
        </>
    )
}

export default MainScreen