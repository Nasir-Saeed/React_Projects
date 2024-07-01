import React, { useContext, useState } from 'react'
import LoginImage from './img/login-side-image.svg'
import UserContext from '../context/UserContext';
import Profile from './Profile';

function Login() {
    const urlImage = LoginImage;
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password })
    }

    return (
        <>
            <div className="text-gray-900 flex justify-center align-items-center mt-48">
                <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                        <div className="mt-12 flex flex-col items-center">
                            <div className='align-items-center'>
                                <h1 className="text-2xl xl:text-3xl font-extrabold">
                                    Login
                                </h1>
                                <div className="w-full flex-1 mt-8">
                                    <div className="mx-auto max-w-xs">
                                        <input
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                            type="text"
                                            placeholder="Username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                        <input
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                            type="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <button
                                            className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                                            onClick={handleSubmit}>
                                            <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                                <circle cx="8.5" cy="7" r="4" />
                                                <path d="M20 8v6M23 11h-6" />
                                            </svg>
                                            <span className="ml-3">
                                                Login
                                            </span>
                                        </button>
                                        <p className="mt-6 text-xs text-gray-600 text-center">
                                            I agree  {" "}
                                            <a href="#" className="border-b border-gray-500 border-dotted">
                                                Terms of Service{" "}
                                            </a>
                                            and its{" "}
                                            <a href="#" className="border-b border-gray-500 border-dotted">
                                                {" "} Privacy Policy
                                            </a>
                                            <Profile/>
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex-1 bg-indigo-100 text-center hidden lg:flex" >
                        <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${urlImage})` }}>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login