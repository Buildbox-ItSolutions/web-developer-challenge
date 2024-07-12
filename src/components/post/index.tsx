export type PostProps = {
    Id: string;
    Message: string;
    SentBy: string;
    Image64: string;
    RemovePost?: () => void
}

export default function Post(props: PostProps) {
    return (
        <article key={props.Id}>
            <button onClick={props.RemovePost!}>X</button>
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