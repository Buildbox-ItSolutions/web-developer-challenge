import CreatePost from './components/CreatePost'
import Header from './components/Header'
import { CemterContainer, MainContainer } from './components/MainContainer'
import PostContainer from './components/PostContainer'
import { usePost } from './hooks/post'
import './index.css'

function App() {
	const { data, createPost, removePost } = usePost({
		posts: []
	})
	return (
		<main className="App">
				<Header />
				<MainContainer>
					<CemterContainer>
						<CreatePost createPost={createPost} />
						<PostContainer data={data} removePost={removePost} />
					</CemterContainer>
				</MainContainer>
		</main>
	)
}



export default App
