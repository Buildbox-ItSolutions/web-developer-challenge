'use client';
import { CardInput } from './components/cardInput';
import { CardPosts } from './components/cardPosts';
import { PageContainer } from './pageStyle';
import { useState } from 'react';

interface PostProps {
	id: string;
	name: string | null;
	message: string;
	photo: string;
}

export default function Home() {
	const [post, setPost] = useState<PostProps>({ id: '', name: '', message: '', photo: '' });
	const [posts, setPosts] = useState<PostProps[]>([]);
	console.log(posts[0]?.id);

	const handlePublish = (newPost: PostProps) => {
		setPosts(prevPosts => [...prevPosts, newPost]);
		setPost({ id: '', name: '', message: '', photo: '' });
	};

	const handleRemovePost = (id: string) => {
		setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
	};

	return (
		<PageContainer>
			<CardInput post={post} setPost={setPost} handlePublish={handlePublish} />
			<div>
				<div className='feed'>Feed</div>
				{posts.map((p) => (
					<CardPosts key={p.id} name={p.name} message={p.message} photo={p.photo} id={p.id} onRemove={handleRemovePost} />
				))}
			</div>
		</PageContainer>
	);
}
