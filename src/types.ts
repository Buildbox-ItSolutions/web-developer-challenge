type Author = {
	name: string
	image: {
		url: string
	}
}

export type Post = {
	id: string
	text: string
	author: Author
}