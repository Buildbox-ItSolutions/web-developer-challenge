type Author = {
	name: string
	image?: string
}

export type Post = {
	id: string
	text: string
	author: Author
}