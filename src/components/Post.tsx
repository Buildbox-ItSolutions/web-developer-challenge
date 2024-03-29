import { styled } from "../style";
import { Avatar } from "./Avatar";
import deleteSvg from "../assets/delete.svg";


import { Box } from "./Box";
type PostProps = {
    avatar: string;
    name: string;
    content: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onDelete: (post: any) => void;
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

export function Post({ avatar, name, content, onDelete }: PostProps) {
    return (
        <Box>
            <Container>
                <Img className="iconDelete" src={deleteSvg} onClick={onDelete} />
                <Avatar src={`./src/assets/${avatar}`} alt="imagem gerada de forma random" />
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