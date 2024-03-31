import { CreatePost } from '@/components/CreatePost/CreatePost'
import { Feed } from '@/components/Feed/Feed'
import { Header } from '@/components/Header/Header'

export default function Home() {
	return (
		<main>
			<Header />
			<CreatePost />
			<Feed />
		</main>
	)
}
