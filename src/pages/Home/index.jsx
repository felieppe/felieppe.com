import './home.css'

import { useEffect } from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Home() {
    useEffect(() => {
        document.title = "Felipe Cabrera"
    }, [])

    return (
        <>
            <Header actual={"HOME"} />

            <div className='home'>
                <div className='home-title'>
                    <h1>WELCOME,</h1>
                    <h1>I'M FELIPE CABRERA</h1>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Home