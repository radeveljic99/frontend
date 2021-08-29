import React from "react";
import {Link} from "react-router-dom";
import korpaElementi from "../data/korpaElementi";

class ProizvodDetalji extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.location.state ;
        console.log(this.state);
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
        return <div>
            <h1 className="text-3xl text-red-600 text-center m-5 p-5"> Detalji o proizvodu </h1>
            <div className="flex justify-around items-baseline m-5 pb-5">
                <div className="grid grid-cols-2 grid-flow-row rounded-xl border border-red-400  shadow-xl">
                    <div className="p-3 "><img src={this.state.putanja} alt="Zemlja Snova" className="rounded-xl object-cover"
                                               style={{width: '35vw', height:'40vw'}} /></div>
                    <div className="m-5 p-5 text-center">
                        <div className="m-5 p-5"><h1 className="text-red-600 text-2xl mb-5 pb-5">{this.state.naziv} </h1>
                            <div className="flex justify-around items-center ">
                                <div className="px-5 m-5 text-xl text-bold"><p>Cijena </p></div>
                                <div className="px-5 m-5 text-xl"><p> € {this.state.cijena}</p></div>
                            </div>
                            <hr/>
                                <div className="flex justify-around items-center">
                                    <div className="px-5 m-5 text-xl text-bold"><p>Kategorija </p></div>
                                    <div className="px-5 m-5 text-xl"><p> Proljece Ljeto</p></div>
                                </div>
                                <hr/>
                        </div>

                        <div className="flex justify-around items-end h-52">
                            <div className="text-center w-36 border-2 border-red-400 mb-1 p-2 rounded-2xl text-red-600 font-semibold  hover:bg-red-400
                    hover:text-white">
                                <Link onClick={this.addToCart.bind(this,
                                    this.props.id, this.state.naziv, this.state.cijena, this.state.putanja)}>Dodaj u korpu</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    }

    }

    export default ProizvodDetalji;