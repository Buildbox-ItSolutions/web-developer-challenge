import { useState } from 'react'
import reactLogo from './assets/react.svg'
import CreatePost from './components/CreatePost'
import Header from './components/Header'
import PostItem from './components/PostItem'
import { usePost } from './hooks/post'

function App() {
	const { data, createPost, removePost } = usePost([])
	console.log(data)
	return (
		<div className="App">
			<Header />
			<main>
				<CreatePost createPost={createPost} />
			</main>
			<section>
				<h1>Feed</h1>
				{data.map(post => <PostItem key={post.id} removePost={removePost} {...post} />)}
			</section>
		</div>
	)
}

export default App
