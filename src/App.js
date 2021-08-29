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

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.loggedIn = false;
    }
    
    handleLoginOrRegister = (data) => {
        this.setState({loggedIn: data})
    }

    render() {
        return <div>
            <Router>
                    <Navbar loggedIn={this.state.loggedIn} loggedInChange={this.handleLoginOrRegister}/>
                    <Route exact path='/' component={Pocetna}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/productDetails/:id' component={ProizvodDetalji}/>
                    <Route path='/cart' component={Korpa}/>
                    <Footer/>
            </Router>
        </div>
    }
}

export default App;
