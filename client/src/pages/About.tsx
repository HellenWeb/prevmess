import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const About = () => {
    return (
        <div>
            <Navbar />
            <div className="intro">
                <div className="container mx-auto">
                    <div className="intro__inner mt-40 text-center">
                        <h1 className='text-6xl'>HellenWeb</h1>
                        <p className='m-7 opacity-70'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur
                        </p>
                        <div className="flex justify-center">
                            <a href="https://github.com/HellenWeb"><button className="p-2 pl-5 mr-2 pr-5 bg-gray-500 text-gray-100 text-sm rounded-lg focus:border-4 border-gray-300">Github</button></a>
                            <a href="https://t.me/YungHellen"><button className="p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-sm rounded-lg focus:border-4 border-blue-300">Telegram</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About