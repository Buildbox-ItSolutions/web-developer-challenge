import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import { Post } from './interfaces/post';
import PostComponent from './components/Post/Post';

export default function App() {
	const [posts, setPosts] = useState<Post[]>([]);

	const addPost = (newPost: Post) => {
		setPosts((prevPosts) => [...prevPosts, newPost]);
	};

	const deletePost = (index: number) => {
		console.log(index)
		setPosts((prevPosts) => {
			return prevPosts.filter((item) => index === item.index);
		});
	};

	return (
		<body>
			<Header />
			<main>
				<Form addPost={addPost} />
				<section>
					<p>Feed</p>
					{posts.map((post, index) => (
						<PostComponent
							post={post}
							index={index}
							deletePost={deletePost}
						/>
					))}
				</section>
			</main>
		</body>
	);
}
