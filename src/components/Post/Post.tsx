import { IoIosCloseCircleOutline } from "react-icons/io";
import { Post as StylePost } from './Post-style';
import { IPost } from "../../Interfaces/IPost";

interface PostProps {
    data: IPost;
}

export default function Post({ data }: PostProps) {
    const { imgSrc, message, name } = data;

    return (
        <StylePost>
            <div className="first-section">
                <img src={ imgSrc } alt="post image" />
                <IoIosCloseCircleOutline id="close-icon" fill="#A34C27" />
            </div>

            <p>{ message }</p>

            <small>Enviador por</small>
            <p id="nameAuthor">{ name }</p>
        </StylePost>
    );
}