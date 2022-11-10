import del from "../assets/delete.svg"

import "./Card.css"

function Card({img, nome, mensagem, handleClick}) {
    return (
        <div id="card">
            <img src={img} alt="foto de pefil" />

            <div id="info">
                <p>{mensagem}</p>
                
                <div id="infoNome">
                    <span>enviado por</span>
                    <strong>{nome}</strong>
                </div>
            </div>

            <button onClick={handleClick}>
                <img src={del} alt="butão para deletar a postagem" />
            </button>
        </div>
    )
}

export default Card