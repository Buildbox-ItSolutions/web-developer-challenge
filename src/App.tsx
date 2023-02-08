import CreatePost from './components/CreatePost'
import Header from './components/Header'
import { MainContainer } from './components/MainContainer'
import PostItem from './components/PostItem'
import { usePost } from './hooks/post'

function App() {
	const { data, createPost, removePost } = usePost([])
	return (
		<div className="App">
			<Header />
			<MainContainer>
				<CreatePost createPost={createPost} />
				<section>
					<h1>Feed</h1>
					{data.map(post => <PostItem key={post.id} removePost={removePost} {...post} />)}
				</section>
			</MainContainer>
		</div>
	)
}

export default App
