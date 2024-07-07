
import slcImage from '../assets/images/slcImage.svg';
export default function Form() {
    return (
        <div>
            <form>
                
                <label htmlFor="imgUpload">
                    <img id="test" src={slcImage} alt="Selecionar imagem"/>
                </label>
                
                <input id="imgUpload" type="file" accept="image/*" hidden />
                
                <input type="text" placeholder="Digite seu nome" />
                <textarea placeholder="Mensagem"></textarea>

                <a href="#">Descartar</a>
                <button type="submit">Publicar</button>
            </form>
        </div>
    );
}