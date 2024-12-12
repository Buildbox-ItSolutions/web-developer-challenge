import React from 'react'
import { ImageStyle } from './style'

interface ImageProps {
    src: string
    alt?: string
    behavior?: string
}

export function Image({ src, alt, behavior } : ImageProps) {
  return (
    <ImageStyle behavior={behavior}>
      <img src={src} alt={alt} />  
    </ImageStyle>
  )
}
