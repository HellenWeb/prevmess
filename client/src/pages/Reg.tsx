import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const Reg = () => {

    function registerHandler() {
        return fetch('https://127.0.0.1:8000/')
    }

    return (
        <div>
            <Navbar />
            <div className="relative w-96 flex justify-center mx-auto bg-white mt-24">
            <div className="p-6" x-data="app">
                <div x-show="isLoginPage" className="space-y-4">
                    <header className="mb-3 text-2xl font-bold">Create your profile</header>
                    <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200">
                    <input
                        type="text"
                        placeholder="Email"
                        className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                    />
                    </div>
                    <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200">
                    <input
                        type="password"
                        placeholder="Password"
                        className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                    />
                    </div>
                    <div className="flex justify-center">
                        <button
                        className="w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400 mr-2"
                        >
                        CREATE ACCOUNT
                        </button>
                        <button
                        className="w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400"
                        >
                        LOG IN
                        </button>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default Reg