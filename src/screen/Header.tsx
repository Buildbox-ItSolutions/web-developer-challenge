import React from 'react'

interface Props {
  // Defina as propriedades que seu componente vai receber
  nome: string
}

export default function Header ({ nome }: Props): JSX.Element {
  return <div>Olá, {nome}!</div>
}
