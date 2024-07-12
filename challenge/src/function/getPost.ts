export function getPosts() {
  const posts = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key?.startsWith('post_')) {
      const postDataString = localStorage.getItem(key)
      const postData =
        postDataString !== null ? JSON.parse(postDataString) : null
      posts.push(postData)
    }
  }
  return posts
}
