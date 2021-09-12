import React from "react";
import {Redirect, withRouter} from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {useHistory} from "react-router-dom";
import axios from "axios";

const qs = require('querystring');
class Proizvod extends React.Component {

    constructor(props) {
        super(props);
        // console.log(this.props);
        this.state = {
            isClicked: false
        };
    }

    redirectToProductDetails(id, naziv, cijena, putanja, kategorija, event) {
        event.preventDefault();
        this.props.history.push(
            {
                pathname: `/productDetails/${id}`,
                state: {
                    'id': id,
                    'naziv': naziv,
                    'cijena': cijena,
                    'putanja': putanja,
                    'kategorija':kategorija
                }
            });
    }

    addToCart(id, naziv, cijena, putanja, event) {
        event.preventDefault();
        if (!!localStorage.getItem('token')) {
            axios.post('http://localhost:5000/cartProducts', qs.stringify({
                productId : id,
                userId : localStorage.getItem('userId')
            })).then(
                response => {
                    localStorage.setItem('brojElemenataUKorpi', +localStorage.getItem('brojElementaUKorpi') + 1);
                    this.props.history.push({pathname: '/cart'});
                },
                error => {
                    window.alert(error);
                }
            )
        } else {
            window.alert('Prijavi se ili registruj da bi dodao u korpu');
        }
    }

    render() {
        return <div
            className="col rounded-xl bg-white  shadow-md overflow-hidden w-72 hover:shadow-2xl
            cursor-pointer bg-gray-300 border-2 border-white">
            <Link to='/#' onClick={this.redirectToProductDetails.bind(
                this, this.props.id, this.props.naziv, this.props.cijena, this.props.putanja,  this.props.kategorija.name)}>
                <img src={this.props.putanja}
                     alt="Zemlja Snova"
                     className="w-72 h-80 object-cover"/>
                <div className="m-4">
                    <span className="font-bold">{this.props.naziv}</span>
                    <span className="block text-gray-500 text-sm">Cijena : {this.props.cijena} €</span>
                </div>
            </Link>
            <div className="flex justify-center items-center m-2">
                <div className="text-center w-36 border-2 border-red-400 mb-1 p-2 rounded-2xl text-red-600 font-semibold  hover:bg-red-400
                   hover:text-white">
                    <Link to='/#' onClick={this.addToCart.bind(this,
                        this.props.id, this.props.naziv, this.props.cijena, this.props.putanja)}>Dodaj u korpu</Link>
                </div>
            </div>
        </div>
    }
}

export default withRouter(Proizvod);
