import './contact.css'

import { useEffect } from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Contact() {
    useEffect(() => {
        document.title = "Contact | Felipe Cabrera"
    }, [])

    return (
        <>
            <Header actual={"CONTACT"}/>

            <div className='contact-title'>
                <h1>CONTACT ME</h1>
            </div>

            <div className='contact'>
                <div className='contact-form'>
                    <div className='contact-form-title'>
                        <p>Let's Work Together</p>
                    </div>
                    
                    <form>
                        <label htmlFor="fname">Full Name</label> <br />
                        <input type="text" id='fname' name='fullName' placeholder='John Doe' required/> <br />

                        <label htmlFor='email'>Email</label> <br />
                        <input type="email" id="email" name="email" placeholder='test@test.com' required/> <br />

                        <label htmlFor='msg'>Message</label> <br />
                        <textarea id="msg" name="message" placeholder='Message' required/> <br />

                        <input className="contact-form-submit" type="submit" value="SUBMIT" />
                    </form>
                </div>

                <div className='contact-other'>
                    <div className='contact-other-title'>
                        Other Ways To Contact Me    
                    </div>

                    <div className='contact-other-methods'>
                        <div className='contact-other-method'>
                            <div className='contact-other-method-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#000000" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                            </div>

                            <div className='contact-other-method-data'>
                                <a href="mailto:contact@felieppe.com">contact@felieppe.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Contact