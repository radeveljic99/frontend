import React from "react";
import kategorije from "../data/kategorije";
import {Link} from "react-router-dom";


class Kategorije extends React.Component {

    constructor(props) {
        super(props);
        this.state = kategorije;
    }

    categoryClicked = (categoryName, event) => {
        event.preventDefault();
        this.props.onCategoryChange(categoryName);
    }

    render() {
        return <div className="col-span-1">
            <h1 className="text-2xl mx-5 mb-5 p-5">KATEGORIJE</h1>
            <ul className="space-x-5 ml-5 space-y-1 text-md">
                {
                    this.state.map((kategorija) => <li className="ml-5 rounded-lg hover:bg-gray-200 ">
                        <Link to='/' onClick={ this.categoryClicked.bind(this, kategorija.naziv)}>{kategorija.naziv}</Link></li>)
                }
            </ul>
        </div>
    }
}

export default Kategorije;
