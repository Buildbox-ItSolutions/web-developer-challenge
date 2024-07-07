import { ImgHTMLAttributes } from 'react'
import { AvatarImg } from './styles'

interface ImageAvatarProps extends ImgHTMLAttributes<HTMLImageElement> {}

export function ImageAvatar({ ...props }: ImageAvatarProps) {
  return <AvatarImg {...props} />
}
