import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Pocetna from "./components/Pocetna";
import Login from "./components/Login";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Register from "./components/Register";
import ProizvodDetalji from "./components/ProizvodDetalji";
import Korpa from "./components/Korpa";
import React from "react";
import axios from "axios";
import AdminPanel from "./components/AdminPanel";
import FirebaseTest from "./components/FirebaseTest";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            amountOfProducts: 0
        };
        this.state.loggedIn = !!localStorage.getItem('token');
        this.state.search='';
    }

    handleLoginOrRegister = (data) => {
        this.setState({loggedIn: data})
    }

    cartChanged = () => {
        this.setState({
            amountOfProducts: localStorage.getItem('brojElemenataUKorpi')
        });
    }

    searchChanged = (searchParam) => {
        this.setState({
            search : searchParam
        });
    }

    render() {
        return <div>
            <Router>
                <Navbar loggedIn={this.state.loggedIn}
                        email={this.state.email}
                        password={this.state.password}
                        loggedInChange={this.handleLoginOrRegister}
                        searchChanged={this.searchChanged}
                        cartChanged={this.cartChanged}
                        amount={this.state.amountOfProducts}/>
                <Switch>
                    <Route exact path='/' component={() => <Pocetna search={this.state.search}/>}/>
                    <Route path='/login' component={() => <Login handleLogin={this.handleLoginOrRegister}/>}/>
                    <Route path='/register' component={() => <Register handleRegister={this.handleLoginOrRegister}/>}/>
                    <Route path='/productDetails/:id' component={ProizvodDetalji}/>
                    <Route path='/cart' component={() => <Korpa amountChanged={this.cartChanged}/>}/>
                    <Route path='/admin' component={() => <AdminPanel/>}/>
                    <Route path='/test' component={FirebaseTest} />
                </Switch>
                <Footer/>
            </Router>
        </div>
    }
}

export default App;
