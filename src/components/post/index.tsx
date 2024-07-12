export type PostProps = {
    Message: string;
    SentBy: string;
    Image64: string;
}

export default function Post(props: PostProps) {
    return (
        <article>
            <img src={props.Image64} alt="Imagem do Post" />
            <p>
                {props.Message}
            </p>
            <span className="sent-by">
                <p>
                    Enviado por:
                </p>
                <strong>
                    {props.SentBy}
                </strong>
            </span>
        </article>
    )
}