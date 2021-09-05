import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";


class Kategorije extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            kategorije: this.props.kategorije
        };
        console.log(this.state.kategorije);
    }

    componentDidMount() {
        axios.get("http://localhost:5000/categories").then(
            response => {
                // console.log(response);
                this.setState({kategorije: response.data});
                // window.alert('Categories succesfully loaded');
            },
            error => {
                window.alert('Error while loading categories : ' + error);
            }
        );
        // console.log(this.state);
    }

    categoryClicked = (categoryName, categoryId, event) => {
        event.preventDefault();
        this.props.onCategoryChange(
            {
                id: categoryId,
                name: categoryName
            }
        );
    }

    render() {
        return <div className="col-span-1">
            <h1 className="text-2xl mx-5 mb-5 p-5">KATEGORIJE</h1>
            <ul className="space-x-5 ml-5 space-y-1 text-md">
                {
                    this.state.kategorije.map((kategorija) => <li key={kategorija.id}
                                                                  className="ml-5 px-5 py-1 rounded-lg hover:bg-red-400 hover:cursor-pointer">
                        <Link to='/'
                              onClick={this.categoryClicked.bind(this, kategorija.name, kategorija.id)}>{kategorija.name}</Link>
                    </li>)
                }
            </ul>
        </div>
    }
}

export default Kategorije;
