import './header.css'

import Logo from "./logo.svg"

function Header() {
    return (
        <div className="header">
            <div className="header-logo">
                <img src={Logo}></img>
            </div>

            <div className="header-buttons">
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/about">ABOUT</a></li>
                    <li><a href="/portfolio">PORTFOLIO</a></li>
                    <li><a href="/contact">CONTACT</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header