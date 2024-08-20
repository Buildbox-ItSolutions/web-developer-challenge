import { ReactNode, CSSProperties } from 'react'

interface FileObjectType {
  file: File
  dataUrl: string
}
interface FileUploaderProps {
  image?: FileObjectType
  setImage: (img?: FileObjectType) => void
  onFileAdded: (img?: FileObjectType) => void
  onFileRemoved?: (img?: FileObjectType) => void
  clear?: () => void
  uploadIcon?: ReactNode
  deleteIcon?: ReactNode
  style?: CSSProperties
}
interface UploadIconProp {
  element?: ReactNode
}

interface DeleteIconProps {
  icon?: ReactNode
}

export type {
  FileObjectType,
  FileUploaderProps,
  UploadIconProp,
  DeleteIconProps
}
