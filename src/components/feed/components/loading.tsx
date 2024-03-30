import { ComponentProps } from 'react'
import { LoadingContainer } from './styles'

export function LoadingFeed(props: ComponentProps<'div'>) {
  return (
    <LoadingContainer {...props}>
      {Array.from({ length: 3 }).map((_, index) => (
        <div className="animate-pulse" key={index}>
          <div className="animate-pulse-thumb" />
          <div className="animate-pulse-texts">
            <span />
            <span />
            <span />

            <div>
              <span />
              <span />
            </div>
          </div>
        </div>
      ))}
    </LoadingContainer>
  )
}
