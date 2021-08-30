import React from "react";
import {Link, withRouter} from "react-router-dom";
import axios from "axios";

const qs = require('querystring');

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {email: '', password: ''};
        this.state.loggedIn = false;
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
            email: this.state.email,
            password: this.state.password,
            returnSecureToken: true
        };

        axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC9jSuPN8I1_T7UsVEqB1ZcvrR4wV_u8N4",
            qs.stringify(data)).then(
            response => {
                // window.alert("Succesfully logged in");
                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('email', this.state.email);
                this.props.history.push('/', {loggedIn: true});
                this.props.handleLogin(true);

            },
            err => {
                window.alert('error');
            }
        );
    }

    render() {
        return <div className="h-full flex justify-center gap-5 m-5 p-5 text-xl ">
            <form action="" className="flex m-5 p-5 flex-col border-2 rounded-md border-red-400 shadow-lg">
                <h1 className="text-center text-2xl">Prijavi se</h1>
                <hr className="border mt-2"/>
                <div className="pt-2">
                    <label htmlFor="email">Email </label>
                    <br/>
                    <input type="email" id="email"
                           className="rounded-md px-5 rounded border-2 border-red-400 w-64"
                           value={this.state.email}
                           onChange={this.emailChanged}/>
                </div>
                <div className="pd-5">
                    <label htmlFor="password">Sifra</label>
                    <br/>
                    <input type="password" id="password"
                           className="pd-5 rounded-md px-5 border-2 border-red-400 w-64"
                           value={this.state.password}
                           onChange={this.passwordChanged}/>
                </div>

                <button
                    className="mt-5 border-2 text-center border-red-400  p-1 rounded-md  font-semibold
                        text-red-600 hover:bg-red-400 hover:text-white flex items-center justify-center"
                    onClick={this.onButtonClick}>
                    Prijavi se
                </button>
                <hr className="border mt-5 mb-3"/>
                <div className="flex flex-row">
                    <div>
                        <Link to='/register' className="text-sm text-blue-600">Registruj se </Link>
                    </div>
                </div>
            </form>
        </div>
    }

}

export default withRouter(Login);
