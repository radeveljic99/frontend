import React from "react";
import Proizvod from "./Proizvod.js";
import proizvodi from "../data/proizvodi";
import Pagination from "./Pagination";
import Kategorije from "./Kategorije";

class Pocetna extends React.Component {

    constructor(props) {
        super(props);
        this.state = proizvodi;
        console.log(this.state);
    }

    render() {
        return <div>
            <div className="grid grid-cols-5 grid-flow-row p-2 space-x-8">
                <Kategorije/>
                <div className="col-span-4">
                    <h1 className="text-center text-3xl pt-2">PROLJECE LJETO</h1>
                    <div className="grid grid-flow-row grid-cols-4  gap-12 p-5 m-5 ">
                        {
                            this.state.map((product) => <Proizvod putanja={product.putanja} cijena={product.cijena}
                                                                  naziv={product.ime}/>)
                        }
                    </div>
                </div>
            </div>
            <Pagination/>
        </div>
    }
}

export default Pocetna;
