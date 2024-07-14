'use client';
import { CardInput } from './components/cardInput';
import { CardPosts } from './components/cardPosts';
import { PageContainer } from './pageStyle';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PostProps {
	id: string;
	name: string | null;
	message: string;
	photo: string;
}

export default function Home() {
	const [post, setPost] = useState<PostProps>({ id: '', name: '', message: '', photo: '' });
	const [posts, setPosts] = useState<PostProps[]>([]);

	const handlePublish = (newPost: PostProps) => {
		setPosts(prevPosts => [newPost, ...prevPosts]);
		setPost({ id: '', name: '', message: '', photo: '' });
	};

	const handleRemovePost = (id: string) => {
		setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
	};

	return (
		<PageContainer>
			<CardInput post={post} setPost={setPost} handlePublish={handlePublish} />
			<div>
				{posts.length > 0 && <div className='feed'>Feed</div>}
				<AnimatePresence>
					{posts.map((p) => (
						<motion.div
							key={p.id}
							initial={{ opacity: 0, y: -100 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 100 }}
							transition={{ duration: 0.8 }}
						>
							<CardPosts name={p.name} message={p.message} photo={p.photo} id={p.id} onRemove={handleRemovePost} />
						</motion.div>
					))}
				</AnimatePresence>
			</div>
		</PageContainer>
	);
}
