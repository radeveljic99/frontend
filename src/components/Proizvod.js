import React from "react";
import {Redirect, withRouter} from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {useHistory} from "react-router-dom";
import korpaElementi from "../data/korpaElementi";


class Proizvod extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isClicked: false
        };
    }

    redirectToProductDetails(id, naziv, cijena, putanja, event) {
        event.preventDefault();
        this.props.history.push(
            {
                pathname: `/productDetails/${id}`,
                state: {
                    'id': id,
                    'naziv': naziv,
                    'cijena': cijena,
                    'putanja': putanja,
                }
            });
    }

    addToCart(id, naziv, cijena, putanja, event) {
        event.preventDefault();
        korpaElementi.push({
            'id': id,
            'naziv': naziv,
            'cijena': cijena,
            'putanja': putanja,
        });
        this.props.history.push({pathname: '/cart'});
    }

    render() {
        return <div
            className="col rounded-xl bg-white border-gray-200 shadow-md overflow-hidden hover:shadow-2xl cursor-pointer bg-gray-200">
            <Link to='/#' onClick={this.redirectToProductDetails.bind(
                this, this.props.id, this.props.naziv, this.props.cijena, this.props.putanja)}>
                <img src={this.props.putanja}
                     alt="Zemlja Snova"
                     className="w-72 h-80 object-cover"/>
                <div className="m-4">
                    <span className="font-bold">Naziv proizvoda: {this.props.naziv}</span>
                    <span className="block text-gray-500 text-sm">Cijena : {this.props.cijena} €</span>
                </div>
            </Link>
            <div className="flex justify-center items-center m-2">
                <div className="text-center w-36 border-2 border-red-400 mb-1 p-2 rounded-2xl text-red-600 font-semibold  hover:bg-red-400
                   hover:text-white">
                    <Link  to='/#' onClick={this.addToCart.bind(this,
                        this.props.id, this.props.naziv, this.props.cijena, this.props.putanja)}>Dodaj u korpu</Link>
                </div>
            </div>
        </div>
    }
}

export default withRouter(Proizvod);
