import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import { Post } from './interfaces/post';

export default function App() {
	const [posts, setPosts] = useState<Post[]>([]);

	const addPost = (newPost: Post) => {
		setPosts((prevPosts) => [...prevPosts, newPost]);
	};

	return (
		<body>
			<Header />
			<main>
				<Form addPost={addPost} />
				{posts.map((post) => (
					<>
						<h1>{post.name}</h1>
					</>
				))}
			</main>
		</body>
	);
}
