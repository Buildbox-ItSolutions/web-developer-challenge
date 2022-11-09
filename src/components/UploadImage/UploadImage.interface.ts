export interface Props {
  children?: React.ReactNode
  onChange: (name: string, value: string) => void
  value: string
  name: string
}
