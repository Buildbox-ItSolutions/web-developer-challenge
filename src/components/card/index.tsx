import { CardContainer, CardContent } from "./styles";
import deleteIcon from '../../assets/delete.svg'

interface PostProps {
    name: string,
    image: string,
    description: string,
    postRemoveFuction: () => void
}

export function Card({ image, name, description, postRemoveFuction }: PostProps) {
    return (
        <CardContainer>
            <div>
                <button onClick={postRemoveFuction}>
                    <img src={deleteIcon} alt="" />
                </button>
            </div>

            <section>
                <img src={image} alt="" />

                <CardContent>
                    <p>{description}</p>

                    <small>Enviado por</small>
                    <span>{name}</span>
                </CardContent>
            </section>
        </CardContainer>
    )
}