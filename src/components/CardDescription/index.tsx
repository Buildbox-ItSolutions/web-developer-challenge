import React from 'react'
import { MdOutlineDangerous } from 'react-icons/md'
import { Container, DeleteButton, Description, Image, Nameanddate, TitleName } from './styled'

interface Props {
    image: File
    description: string
    name: string
    id: number
    onDelete: (id: number) => void
}

const CardDescription: React.FC<Props> = ({ image, description, name, id, onDelete }) => {
    return (
        <Container>
            <Image src={URL.createObjectURL(image)} alt="Card Image" />
            <Description>
                {description}
                <Nameanddate>
                    <TitleName>Enviado por:</TitleName>
                    {name}
                </Nameanddate>
            </Description>
            <DeleteButton>
                <MdOutlineDangerous onClick={() => onDelete(id)} />
            </DeleteButton>
        </Container>
    )
}

export default CardDescription
