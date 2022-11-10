import logo from "../assets/bx-logo.svg"

import "./Header.css"

function Header() {
    return (
        <header className="headerContainer">
            <img src={logo} alt="logo da página - Buildbox challenge" />
        </header>
    )
}

export default Header