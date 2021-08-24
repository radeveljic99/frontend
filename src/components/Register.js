import React from "react";
import {Link} from "react-router-dom";

class Register extends React.Component {

    render(){
        return <div className="h-full flex justify-center gap-5 m-5 p-5 text-xl ">

            <form action="" className="flex m-5 p-5 flex-col border-2 rounded-md border-red-400 shadow-lg">
                <h1 className="text-center text-2xl">Registruj se</h1>
                <hr className="border mt-2"/>
                    <div className="pt-5">
                        <label htmlFor="email">Email </label>
                        <br/>
                            <input type="email" id="email"
                                   className="rounded-md px-5 rounded border-2 border-red-400 w-64"/>
                    </div>
                    <div className="pd-5">
                        <label htmlFor="password">Lozinka</label>
                        <br/>
                            <input type="password" id="password"
                                   className="pd-5 rounded-md px-5 border-2 border-red-400 w-64"/>
                    </div>

                    <div className="pd-5">
                        <label htmlFor="confirmPassword">Potvrdi lozinku</label>
                        <br/>
                            <input type="password" id="confirmPassword"
                                   className="pd-5 rounded-md px-5 border-2 border-red-400 w-64"/>
                    </div>

                    <div className="pd-5">
                        <label htmlFor="name">Ime</label>
                        <br/>
                            <input type="text" id="name" className="pd-5 rounded-md px-5 border-2 border-red-400 w-64"/>
                    </div>
                    <div className="pd-5">
                        <label htmlFor="lastname">Prezime</label>
                        <br/>
                            <input type="text" id="lastname"
                                   className="pd-5 rounded-md px-5 border-2 border-red-400 w-64"/>
                    </div>


                    <button type="submit"
                            className="mt-5 border-2 text-center border-red-400  rounded-md  font-semibold  text-red-600 hover:bg-red-400 hover:text-white flex items-center justify-center">
                        Registruj se
                    </button>
                    <hr className="border mt-5 mb-3 "/>
                        <div className="flex flex-row">
                            <div>
                                <Link to='/login' className="text-sm text-blue-600">Prijavi se </Link>
                            </div>
                        </div>
            </form>
        </div>

    }

}

export default Register;
