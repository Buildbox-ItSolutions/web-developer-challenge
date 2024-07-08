
import SelectImg from '../../assets/images/icons/Select-img.svg';
import { Form as StyleForm } from './Form-style';

export default function Form() {
    return (
        <div>
            <StyleForm>
                <label htmlFor="imgUpload" id="imgWrapper">
                    <img id="test" src={SelectImg} alt="Selecionar imagem"/>
                </label>
                
                <input id="imgUpload" type="file" accept="image/*" hidden />
                
                <input type="text" placeholder="Digite seu nome" />
                <textarea placeholder="Mensagem"></textarea>

                <div className="buttons-wrapper">
                    <a href="#">Descartar</a>
                    <button type="submit">Publicar</button>
                </div>
            </StyleForm>
        </div>
    );
}