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


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.state.loggedIn = !!localStorage.getItem('token');
        this.state.selectedCategory={id:1, name:'Proljece/Ljeto'};

    }



    handleLoginOrRegister = (data) => {
        console.log('test');
        console.log(this);
        this.setState({loggedIn: data})
    }

    render() {
        return <div>
            <Router>
                <Navbar loggedIn={this.state.loggedIn}
                        email={this.state.email}
                        password={this.state.password}
                        loggedInChange={this.handleLoginOrRegister}/>
                <Switch>

                    <Route exact path='/' component={() => <Pocetna/>}/>
                    <Route path='/login' component={() => <Login handleLogin={this.handleLoginOrRegister.bind(this)}/>}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/productDetails/:id' component={ProizvodDetalji}/>
                    <Route path='/cart' component={Korpa}/>
                </Switch>
                <Footer/>
            </Router>
        </div>
    }
}

export default App;
