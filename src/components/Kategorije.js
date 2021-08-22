import React from "react";
import kategorije from "../data/kategorije";


class Kategorije extends React.Component {

    constructor(props) {
        super(props);
        this.state = kategorije;
        console.log(kategorije)
    }

    render() {
        return <div className="col-span-1">
            <h1 className="text-2xl mx-5 mb-5 p-5">KATEGORIJE</h1>
            <ul className="space-x-5 ml-5 space-y-1 text-md">
                {
                    this.state.map((kategorija) => <li className="ml-5"> {kategorija.naziv}</li>)
                }
            </ul>
        </div>
    }
}

export default Kategorije;
