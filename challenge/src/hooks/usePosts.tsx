import { useContext } from 'react'
import { ProviderContext } from '../context/app-provider/provider'

const usePosts = () => {
    const { addPost, removePost, posts } = useContext(ProviderContext)

    return {
        addPost, removePost, posts
    }
}

export default usePosts