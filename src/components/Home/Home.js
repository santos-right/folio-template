import React from 'react'
import Header from '../Header/Header';
import Body from '../Body/Body';
import Footer from '../Footer/Footer'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        </div>
    )
}

export default Home
