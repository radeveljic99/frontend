import './App.css';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Pocetna from "./components/Pocetna";
import Login from "./components/Login";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Register from "./components/Register";


function App() {
    return (
        <div>
            <Navbar/>
            <Router>
                <Switch>
                    <Route exact path='/' component={Pocetna}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/register' component={Register}/>
                </Switch>
            </Router>
            <Footer/>
        </div>

    );
}

export default App;
