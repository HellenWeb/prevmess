import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="intro">
                <div className="container mx-auto">
                    <div className="intro__inner mt-40 text-center">
                        <h1 className='text-6xl' style={{'fontWeight': '5'}}>PrevMess</h1>
                        <p className='mt-6 opacity-75'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa eum aspernatur totam?
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home