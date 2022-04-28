import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useHttp } from '../hooks/http.hook'
import {useMessage} from '../hooks/message.hook'
import { render } from '@testing-library/react'

export const Reg = () => {
  const {loading, request, error, clearError} = useHttp()
  const message = useMessage()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: '', password: ''
  })

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const registerHandler = async () => {
    const data = await request('/api/submit/register', 'POST', {...form})
    console.log("Hello");
  }

  const loginHandler = async () => {
    try {
      const data = await request('/api/submit/login', 'POST', {...form})
    } catch (e) {}
  }

  render()

    return (
        <div>
            <Navbar />
            <div className="relative w-96 flex justify-center mx-auto bg-white mt-24">
            <div className="p-6" x-data="app">
                <div x-show="isLoginPage" className="space-y-4">
                    <header className="mb-3 text-2xl font-bold">Create your profile</header>
                    <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200">
                    <input
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={form.email}
                        onChange={changeHandler}
                        className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                    />
                    </div>
                    <div className="w-full rounded-2xl bg-gray-50 px-4 ring-2 ring-gray-200">
                    <input
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={changeHandler}
                        placeholder="Password"
                        className="my-3 w-full border-none bg-transparent outline-none focus:outline-none"
                    />
                    </div>
                    <div className="flex justify-center">
                        <button
                        onClick={registerHandler}
                        className="w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400 mr-2"
                        >
                        CREATE ACCOUNT
                        </button>
                        <button
                        onClick={loginHandler}
                        className="w-full rounded-2xl border-b-4 border-b-blue-600 bg-blue-500 py-3 font-bold text-white hover:bg-blue-400 active:translate-y-[0.125rem] active:border-b-blue-400"
                        >
                        LOG IN
                        </button>
                    </div>
                    <meta name='csrf-token' content='{{ csrf_token() }}' />
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default Reg
