import React, { useContext } from 'react'

/* frame-motion */
import { motion } from 'framer-motion'
import { parent, stat } from '../animation/motion'

/* components */
import AddPost from '../components/AddPost'
import Container from '../components/Container'
import FeedArea from '../components/FeedArea'
import Header from '../components/Header'
import Post from '../components/Post'

/* context */
import { PostContext } from '../context/PostContext'

const Home = () => {
  const { posts } = useContext(PostContext)

  return (
    <>
      <Header />
      <Container>
        <AddPost />
        <FeedArea>
          <motion.div variants={parent} initial="hidden" animate="show">
            {posts.map((item, indice) => {
              return (
                <motion.div
                  variants={stat}
                  key={indice}
                  transition={{ duration: 0.3, delay: indice * 0.1 }}
                >
                  <Post
                    name={item.nameOfPost}
                    message={item.messageOfPost}
                    figure={item.figureOfPost}
                    id={indice}
                    key={indice}
                  />
                </motion.div>
              )
            })}
          </motion.div>
        </FeedArea>
      </Container>
    </>
  )
}

export default Home
