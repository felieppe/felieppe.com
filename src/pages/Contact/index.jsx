import './contact.css'

import Header from '../../components/Header'

function Contact() {
    return (
        <>
            <Header/>

            <div className='contact'>
                <div className='contact-title'>
                    <h1>CONTACT ME</h1>
                </div>

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
            </div>
        </>
    )
}

export default Contact