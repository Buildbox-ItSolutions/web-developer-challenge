import { CardContainer } from './styles'

export function Card({ children }: { children: React.ReactNode }) {
  return <CardContainer>{children}</CardContainer>
}
