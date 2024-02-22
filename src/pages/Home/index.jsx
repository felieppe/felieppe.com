import { useEffect } from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Home() {
    useEffect(() => {
        document.title = "Felipe Cabrera"
    }, [])

    return (
        <>
            <Header actual={"home"}/>
            <Footer />
        </>
    )
}

export default Home