import { useEffect, useState } from 'react'

import { Header } from '../../components/Header'
import { Message } from '../../components/Message'
import { PublishingArea } from '../../components/PublishingArea'

import { FeedLabel, MainContainer } from './styles'

import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

import { useMessage } from '../../hooks/useMessage'

export function Home() {
  const { messages } = useMessage();

  return (
    <>
      <Header />

      <MainContainer>
        <PublishingArea />
        
        {
          messages.length > 0 &&
          <FeedLabel>
            Feed
          </FeedLabel>
        }

        {
          messages.map((message) => {
            return (
              <Message
                key={message.id}
                messageData={message}
              />
            )
          })
        }
      </MainContainer>
    </>
  )
}