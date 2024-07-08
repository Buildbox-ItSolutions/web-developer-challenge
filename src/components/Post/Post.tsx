import { IoIosCloseCircleOutline } from "react-icons/io";
import { Post as StylePost } from './Post-style';
import SelectImg from '../../assets/images/icons/Select-img.svg';

export default function Post() {
    return (
        <StylePost>
            <div className="first-section">
                <img src={ SelectImg } alt="post image" />
                <IoIosCloseCircleOutline id="close-icon" fill="#A34C27" />
            </div>

            <p>Consectetur anim qui nostrud aliquip cupidatat eiusmod ut tempor sint. Labore voluptate fugiat proident elit eiusmod consectetur ullamco. Non et cillum voluptate laboris aute non ullamco id velit. </p>

            <small>Enviador por</small>
            <p id="nameAuthor">Autor</p>
        </StylePost>
    );
}