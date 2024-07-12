'use client';
import { CardInput } from './components/cardInput';
import { PageContainer } from './pageStyle';
import { useState } from 'react';

interface PostProps {
	name: string | null;
	message: string;
	photo: string;
}

export default function Home() {
	const [post, setPost] = useState<PostProps>({ name: '', message: '', photo: '' });
	const [posts, setPosts] = useState<PostProps[]>([]);

	const handlePublish = () => {
		setPosts(prevPosts => [...prevPosts, post]);
		setPost({ name: '', message: '', photo: '' });
	};
	console.log(post);
	return (
		<PageContainer>
			<CardInput post={post} setPost={setPost} handlePublish={handlePublish} />
			<div>
				{posts.map((p, index) => (
					<div key={index}>
						<h3>{p.name}</h3>
						<p>{p.message}</p>
						{p.photo && <img src={p.photo} alt="Post" />}
					</div>
				))}
			</div>
		</PageContainer>
	);
}
