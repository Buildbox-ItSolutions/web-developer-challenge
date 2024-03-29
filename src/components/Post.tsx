import { styled } from "../style";
import { Avatar } from "./Avatar";
import deleteSvg from "../assets/delete.svg";


import { Box } from "./Box";
type PostProps = {
    avatar: string;
    name: string;
    content: string;
}
export const Img = styled('img', {
    position: 'absolute',
    right: '20px',
    top: '20px',
})

export const Container = styled('div', {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: '56px',
    marginBottom: '32px',

    span: {
        color: '$warmGreyThree',
        display: 'block',
        marginTop: '24px',
    }
})

export function Post({ avatar, name, content }: PostProps) {
    return (
        <Box>
            <Container>
                <Img className="iconDelete" src={deleteSvg} />
                <Avatar src={`${avatar}`} alt="imagem gerada de forma random" />
                <div>
                    <p>
                        {content}
                    </p>
                    <p>
                        <span>enviado por </span>
                        {name}
                    </p>
                </div>
            </Container>
        </Box>
    )
}