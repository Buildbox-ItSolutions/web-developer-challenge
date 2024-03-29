import './style.css';

type Props = {
  nome: string;
  mensagem: string;
  handleRemoverPost: (index: number) => void;
};

const FeedCard = ({ nome, mensagem, handleRemoverPost }: Props) => {
  return (
    <div className="feed-card">
      <div className="feed-img"></div>
      <button
        className="feed-remove"
        onClick={() => handleRemoverPost(0)}
      ></button>
      <div className="feed-conteudo">
        <div className="feed-card-header">{mensagem}</div>
        <div className="footer-card">
          <span>Enviado por</span>
          <p>{nome}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
