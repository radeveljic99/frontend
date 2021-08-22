import React from "react";

class Login extends React.Component {


    render() {
        return <div className="h-full flex justify-center gap-5 m-5 p-5 text-xl ">
            <form action="" className="flex m-5 p-5 flex-col border-2 rounded-md border-red-400 shadow-lg">
                <h1 className="text-center text-2xl">Prijavi se</h1>
                <hr className="border mt-2"/>
                    <div className="pt-2">
                        <label htmlFor="email">Email </label>
                        <br/>
                            <input type="email" id="email"
                                   className="rounded-md px-5 rounded border-2 border-red-400 w-64"/>
                    </div>
                    <div className="pd-5">
                        <label htmlFor="password">Sifra</label>
                        <br/>
                            <input type="password" id="password"
                                   className="pd-5 rounded-md px-5 border-2 border-red-400 w-64"/>
                    </div>

                    <button type="submit"
                            className="mt-5 border-2 text-center border-red-400  p-1 rounded-md  font-semibold  text-red-600 hover:bg-red-400 hover:text-white flex items-center justify-center">
                        Prijavi se
                    </button>
                    <hr className="border mt-5 mb-3"/>
                        <div className="flex flex-row">
                            <div>
                                <a href="./register.html" className="text-sm text-blue-600">Registruj se </a>
                            </div>
                        </div>
            </form>
        </div>
    }

    }

    export default Login;
