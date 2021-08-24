import React from "react";
import {Redirect} from 'react-router-dom';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class Proizvod extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isClicked: false
        };
    }

    goToProductsDetail() {
        return <Redirect to={{pathname: "/productDetails"}}/>
    }

    render() {
        return <div
            className="col rounded-xl bg-white border-gray-200 shadow-md overflow-hidden hover:shadow-2xl cursor-pointer">
            <Link to='/productDetails/1'><img src={this.props.putanja} alt="Zemlja Snova"
                                            className="w-72 h-80 object-cover"/>
                <div className="m-4">
                    <span className="font-bold">Naziv proizvoda: {this.props.naziv}</span>
                    <span className="block text-gray-500 text-sm">Cijena : {this.props.cijena} €</span>
                </div>
            </Link>
            <div className="flex justify-center items-center m-2">
                <div className="text-center w-36 border-2 border-red-400 mb-1 p-2 rounded-2xl text-red-600 font-semibold  hover:bg-red-400
                   hover:text-white">
                    <a href="#">Dodaj u korpu</a>
                </div>
            </div>
        </div>
    }
}

export default Proizvod;
