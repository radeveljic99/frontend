import React from "react";
import Proizvod from "./Proizvod.js";
import proizvodi from "../data/proizvodi";
import Pagination from "./Pagination";
import Kategorije from "./Kategorije";

class Pocetna extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.proizvodi = proizvodi;
        this.state.selectedCategory = 'Proljece/Ljeto';

        this.state.loggedIn = !!this.props.location.state.loggedIn;
        console.log(this.state);

    }

    handleCategoryChange = (categoryData) => {
        console.log('handleCategoryChange pozvan');
        let newState = this.state;
        newState.selectedCategory = categoryData;
        this.setState(newState);
    }

    render() {
        return <div>
            <div className="grid grid-cols-5 grid-flow-row p-2 space-x-8">
                <Kategorije onCategoryChange={this.handleCategoryChange}/>
                <div className="col-span-4">
                    <h1 className="text-center text-3xl pt-2 upperacase">{this.state.selectedCategory}</h1>
                    <div className="grid grid-flow-row grid-cols-4  gap-12 p-5 m-5 ">
                        {
                            this.state.proizvodi.map((product) => <Proizvod
                                id={product.id}
                                putanja={product.putanja}
                                cijena={product.cijena}
                                naziv={product.naziv}/>)
                        }
                    </div>
                </div>
            </div>
            <Pagination/>
        </div>
    }
}

export default Pocetna;
