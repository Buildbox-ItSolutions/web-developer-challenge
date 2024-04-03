import { Botoes, Descartar, Publicar } from "./Styles"
import ICardPostButtons from '../../interfaces/ICardPosrButtons';

const CardPostButtons: React.FC<ICardPostButtons> = ({ onSubmit, onDiscard }) => {
    const handlePublish = () => {
        if (window.confirm('Tem certeza de que deseja publicar este post?')) {
            onSubmit();
        }
    };

    const handleDiscard = () => {
        if (window.confirm('Tem certeza de que deseja descartar as alterações?')) {
            onDiscard();
        }
    };

    return (
        <Botoes>
            <Descartar onClick={handleDiscard}>
                Descartar
            </Descartar>
            <Publicar onClick={handlePublish}>
                Publicar
            </Publicar>
        </Botoes>
    );
};

export default CardPostButtons;