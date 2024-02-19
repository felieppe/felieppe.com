import './header.css'

import Logo from "../../assets/logo.svg"

function Header() {
    return (
        <>
            <div className="header">
                <div className="header-logo">
                    <a href="/"><img src={Logo} alt="FC"></img></a>
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

            <div className='subheader'>
                <div className='subheader-quote'>
                    <p>DIAMONDS ON MY TEETH, LIL' B****, I AIN'T SMILIN' FOR NOTHIN'</p>
                </div>
            </div>
        </>
    )
}

export default Header