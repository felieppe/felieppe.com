import './header.css'

import Logo from "../../assets/logo.svg"

function Header( { actual }) {
    return (
        <>
            <div className="header">
                <div className="header-logo">
                    <a href="/"><img src={Logo} alt="FC"></img></a>
                </div>

                <div className="header-buttons">
                    <ul>
                        <li><a className={ actual.toUpperCase() == "HOME" ? "header-buttons-active" : null } href="/">HOME</a></li>
                        <li><a className={ actual.toUpperCase() == "ABOUT" ? "header-buttons-active" : null } href="/about">ABOUT</a></li>
                        <li><a className={ actual.toUpperCase() == "PORTFOLIO" ? "header-buttons-active" : null } href="/portfolio">PORTFOLIO</a></li>
                        <li><a className={ actual.toUpperCase() == "CONTACT" ? "header-buttons-active" : null } href="/contact">CONTACT</a></li>
                    </ul>
                </div>
            </div>

            <div className='subheader'>
                <div className='subheader-quote'>
                    <p>DIAMONDS ON MY TEETH, LIL' B****, I AIN'T SMILIN' FOR NOTHIN'</p>
                </div>
            </div>
        </>
    )
}

export default Header