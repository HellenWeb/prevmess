import React from 'react'

export const Navbar = () => {
    return (
        <nav className="nav bg-slate-100 h-14">
            <div className="container mx-auto">
                <div className="nav__inner flex justify-between">
                    <div className="logo mt-3">
                        <h1 className="text-xl">PrevMess</h1>
                    </div>
                    <div className="bar mt-4">
                        <a href="/" className="item mr-1 p-3 hover:bg-slate-200 hover:px-3 hover:py-3 transition-all">Home</a>
                        <a href="/contact" className="item p-3 hover:bg-slate-200 hover:px-3 hover:py-3 transition-all">About</a>
                    </div>
                    <div className="regist mt-4">
                        <a href="/reg" className="item p-3 hover:bg-slate-300 hover:px-3 hover:py-3 transition-all">Registration</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar