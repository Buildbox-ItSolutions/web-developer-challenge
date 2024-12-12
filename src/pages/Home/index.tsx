import Typography from '@mui/material/Typography'
import { Stack } from '@mui/system'
import React, { useContext } from 'react'
import LoadingScreen from '../../components/LoadingScreen'
import Post from '../../components/Post'
import Card from '../../components/WritePostCard'
import { PostContext } from '../../Context/PostContext'
import Page from '../../layouts/Page'

import EmptyIcon from '../../assets/images/package.png'
import { TransitionGroup } from 'react-transition-group'
import { Collapse } from '@mui/material'

export default function Home() {

  const { getPosts } = useContext(PostContext)

  return (
    <Page title='Home'>
      <Stack>
        <Card />
      </Stack>
      <Stack pt={8} >
        <Typography color={'#9f9f9f'} >Feed</Typography>

        <Stack style={{ transition: '2s' }} gap={2} paddingTop={2} >
          <TransitionGroup>
            {
              getPosts().map((value) => (
                <Collapse key={value.id}>
                  <Stack key={value.id} pt={2}>
                    <Post key={value.id} post={value} />
                  </Stack>
                </Collapse>
              ))
            }
          </TransitionGroup>
          <Collapse in={getPosts().length === 0} >
            <Stack sx={{ '&:hover': { transform: 'scale(1.1)', transition: 'all 0.2s' } }} flexDirection={'column'} alignItems={'center'} gap={2}>
              <img src={EmptyIcon} width={'52px'} />
              <Typography color={'#9f9f9f'} variant={'caption'} >Nada para exibir agora. 😥</Typography>
            </Stack>
          </Collapse>
        </Stack>
      </Stack>
    </Page>
  )
}
