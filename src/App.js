import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Pocetna from "./components/Pocetna";
import Login from "./components/Login";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Register from "./components/Register";
import ProizvodDetalji from "./components/ProizvodDetalji";
import Korpa from "./components/Korpa";

function App() {
    return (
        <div>
            <Navbar/>
            <Router>
                <Switch>
                    <Route exact path='/' component={Pocetna}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                    <Route path='/productDetail' component={ProizvodDetalji}/>
                    <Route path='/cart' component={Korpa}/>
                </Switch>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;
