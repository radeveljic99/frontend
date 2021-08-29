import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";

 const qs = require('querystring');

class Register extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            'email' :'',
            'password':''
        }
    }

    emailChanged = event => {
        this.setState({
            email: event.target.value
        });
    }

    passwordChanged = event => {
        this.setState(
            {
                password: event.target.value
            }
        )
    }

    onButtonClick = (event) => {
        event.preventDefault();
        let data = {
            'email': this.state.email,
            'password': this.state.password,
            returnSecureToken: true
        };
        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC9jSuPN8I1_T7UsVEqB1ZcvrR4wV_u8N4",
            qs.stringify(data)).then(
            (response) => {
                window.alert("Register succesfull");
                localStorage.setItem('token', response.data.idToken);
                this.props.history.push('/');
            }
        ).catch(err => {
            window.alert('error');
            console.log(err);
        });


    }

    render(){
        return <div className="h-full flex justify-center gap-5 m-5 p-5 text-xl ">

            <form action="" className="flex m-5 p-5 flex-col border-2 rounded-md border-red-400 shadow-lg">
                <h1 className="text-center text-2xl">Registruj se</h1>
                <hr className="border mt-2"/>
                    <div className="pt-5">
                        <label htmlFor="email">Email </label>
                        <br/>
                            <input type="email" id="email"
                                   className="rounded-md px-5 rounded border-2 border-red-400 w-64"
                            value={this.state.email} onChange={this.emailChanged}/>
                    </div>
                    <div className="pd-5">
                        <label htmlFor="password">Lozinka</label>
                        <br/>
                            <input type="password" id="password"
                                   className="pd-5 rounded-md px-5 border-2 border-red-400 w-64"
                            value={this.state.password} onChange={this.passwordChanged}/>
                    </div>
                    <button
                            className="mt-5 border-2 text-center border-red-400  rounded-md  font-semibold  text-red-600
                             hover:bg-red-400 hover:text-white flex items-center justify-center"
                                onClick={this.onButtonClick}>
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
