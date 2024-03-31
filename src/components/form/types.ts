export interface IProps {
  submit?: any
}

interface PreviewItem {
  lastModified: number
  lastModifiedDate: Date
  name: string
  size: number
  type: string
  webkitRelativePath: string
}

export interface IDataForm {
  _id: string
  name: string
  description: string
  preview: PreviewItem[]
}
