import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


class Navbar extends React.Component {

    render() {
        return <div>
                <nav
                    className="flex justify-around bg-gray-200 items-center space-y-1 border-b-2 b border-red-400 rounded-sm shadow-lg">
                    <div className="flex justify-center items-center pl-2">
                        <div className="font-semibold text-2xl text-red-600"><a href="#">Zemlja Snova</a></div>
                    </div>
                    <div className="flex justify-center items-center space-x-1">
                        <input type="text" placeholder="Search for anything"
                               className="border-2 border-red-400 rounded-md px-2 py-1 w-full "/>
                        <button
                            className="border-2 border-red-400  p-1 rounded-2xl text-red-600 font-semibold  hover:bg-red-400 hover:text-white flex items-center justify-center ">
                            <svg className="h-6 w-6 red-400 " xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                            </svg>
                        </button>
                    </div>

                    <div className="flex justify-center space-x-2">
                        <div className=" flex justify-center items-center py-2 px-3">
                <span
                    className="bg-red-500 border-1 border-red-800 rounded-xl font-xl w-5 h-6 text-white text-center">1</span>
                            <a href="./korpa.html">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0
                              0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                                </svg>
                            </a>
                        </div>

                        <div className="border-2 border-red-400 mb-1 p-2 rounded-2xl text-red-600 font-semibold  hover:bg-red-400
            hover:text-white">
                            <a href="#">Prijava</a>
                        </div>
                        <div className="border-2 border-red-400  mb-1 p-2 rounded-2xl text-red-600 font-semibold  hover:bg-red-400
            hover:text-white ">
                            <a href="./register.html">Registruj se </a>
                        </div>
                    </div>
                </nav>
        </div>
    }
}

export default Navbar;