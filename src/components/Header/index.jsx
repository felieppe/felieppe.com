import './header.css'

import { useNavigate } from 'react-router-dom'

import Logo from "../../assets/logo.svg"

function Header( { actual }) {
    const navigate = useNavigate()

    return (
        <>
            <div className="header">
                <div className="header-logo">
                    <a href="/"><img src={Logo} alt="FC"></img></a>
                </div>

                <div className="header-buttons">
                    <ul>
                        <li><a onClick={() => {navigate("/home")}} className={ actual.toUpperCase() == "HOME" ? "header-buttons-active" : null }>HOME</a></li>
                        <li><a onClick={() => {navigate("/about")}} className={ actual.toUpperCase() == "ABOUT" ? "header-buttons-active" : null }>ABOUT</a></li>
                        <li><a onClick={() => {navigate("/portfolio")}} className={ actual.toUpperCase() == "PORTFOLIO" ? "header-buttons-active" : null }>PORTFOLIO</a></li>
                        <li><a onClick={() => {navigate("/contact")}} className={ actual.toUpperCase() == "CONTACT" ? "header-buttons-active" : null }>CONTACT</a></li>
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