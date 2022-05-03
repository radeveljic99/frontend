import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';


class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.itemsNumber = this.props.amount;
        this.state.loggedIn = !!localStorage.getItem('token');
        this.state.email = '';
        if (!!localStorage.getItem('email')) {
            this.state.email = localStorage.getItem('email');
            this.state.itemsNumber = localStorage.getItem('brojElemenataUKorpi');
            this.state.username = this.state.email.substring(0, this.state.email.indexOf('@'));
        }
        this.state.search = '';
        this.state.isAdmin = this.props.isAdmin;
    }

    logout = (event) => {
        event.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('brojElemenataUKorpi');
        localStorage.removeItem('email');
        localStorage.removeItem('isAdmin');
        this.setState({
            loggedIn: false
        })
        this.props.loggedInChange(false);
    }

    searchChanged = event => {
        event.preventDefault();
        this.setState({
            search: event.target.value
        });
        setTimeout(() => {
            this.props.searchChanged(this.state.search);
        }, 300);
    }

    render() {
        const {
            loggedIn, isAdmin
        } = this.props;

        this.state.itemsNumber = localStorage.getItem('brojElemenataUKorpi');

        if (!!localStorage.getItem('email')) {
            this.state.email = localStorage.getItem('email');
        }
        this.state.username = this.state.email.substring(0, this.state.email.indexOf('@'));

        return <div>
            <nav
                className="flex justify-around bg-gray-200 items-center space-y-1 border-b-2 b border-red-400
                rounded-sm shadow-xl">
                <div className="flex justify-center items-center pl-2">
                    <div className="font-semibold text-2xl text-red-600"><Link to='/'>Zemlja Snova</Link></div>
                </div>
                <div className="flex justify-center items-center space-x-1">
                    <input type="text" placeholder="Pretraži proizvode"
                        className="border-2 border-red-400 rounded-md px-2 py-1 w-full"
                        value={this.state.search}
                        onChange={this.searchChanged} />
                </div>
                <div className="flex justify-center space-x-2">
                    {
                        loggedIn === true ? <div className=" flex justify-center items-center py-2 px-3">
                            <Link to='/cart'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707
                                      1.707H17m00a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                                </svg>
                            </Link>
                        </div> : ''
                    }

                    {loggedIn === false ? <div className="border-2 border-red-400 mb-1 p-2 rounded-2xl text-red-600
                    font-semibold  hover:bg-red-400 hover:text-white">
                        <Link to='/login'>Prijava</Link>
                    </div> : ''}
                    {loggedIn === false ?
                        <div className="border-2 border-red-400  mb-1 p-2 rounded-2xl text-red-600 font-semibold  hover:bg-red-400
            hover:text-white ">
                            <Link to='/register'>Registruj se </Link>
                        </div> : ''
                    }
                    {
                        loggedIn === true ? <div className="border-2 border-red-400  mb-1 p-2 rounded-2xl
                        text-red-600 font-semibold  hover:bg-red-400 hover:text-white ">
                            <Link to='/#' onClick={this.logout}>Izloguj se </Link>
                        </div> : ''
                    }
                    {
                        loggedIn === true ?
                            <p className="text-center mt-3 ml-3">{this.state.username}</p> : ''
                    }
                    {
                        isAdmin ? <div className="border-2 border-red-400  mb-1 ml-5 p-2 rounded-2xl
                        text-red-600 font-semibold  hover:bg-red-400 hover:text-white ">
                            <Link to='/admin'>Dodaj Proizvod</Link>
                        </div> : ''
                    }
                </div>
            </nav>
        </div>
    }
}

export default withRouter(Navbar);
