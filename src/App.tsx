import CreatePost from './components/CreatePost'
import Header from './components/Header'
import { MainContainer } from './components/MainContainer'
import PostContainer from './components/PostContainer'
import PostItem from './components/PostItem'
import { usePost } from './hooks/post'
import './index.css'
function App() {
	const { data, createPost, removePost } = usePost({
		posts: []
	})
	return (
		<div className="App">
			<Header />
			<MainContainer>
				<CreatePost createPost={createPost} />
				<PostContainer data={data} removePost={removePost} />
			</MainContainer>
		</div>
	)
}

export default App
