import logo from "../../assets/img/bx-logo.png"
import {HeaderPost, ImgPost} from "../../styles"

export default function Header() {
  return (
    <HeaderPost>
        <ImgPost src={logo}  alt={logo}/>
    </HeaderPost>
  );
}
