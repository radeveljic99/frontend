import React from "react";
import axios from "axios";
import {withRouter} from "react-router-dom";

// import storage from "../firebase";
const qs = require('querystring');

class AdminPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.image = null;
        this.state.kategorije = [];
        this.state.selectedCategoryId = 0;
        this.state.productName = "";
        this.state.productPrice = 0;
    }

    componentDidMount() {
        axios.get('http://localhost:5000/categories').then(
            response => {
                this.setState({
                    kategorije: response.data
                });
                console.log(this.state);
            },
            error => {
                window.alert("Error while loading categories " + error);
            }
        );

        axios.get('http://localhost:5000/categories/first').then(
            response => {
                this.setState({
                    selectedCategoryId: response.data[0].id
                });
                console.log(response.data[0].id);
                console.log(this.state);
            },
            error => {
                window.alert("Error while loading cateogories " + error);
            }
        );
    }

    handleCategoryChange = event => {
        event.preventDefault();
        console.log("category = " + event.target.value);
        this.setState({
            selectedCategoryId: event.target.value
        });
    }


    onButtonClick = (event) => {
        event.preventDefault();
        let data = new FormData();
        data.append("name", this.state.image.name);
        data.append("file", this.state.image);
        axios.post('http://localhost:5000/addPicture', data).then(
            response => {
               console.log("Slika je uspjesno dodata " + response.data);
            },
            error => {
                window.alert("Error " + error);
            }
        );

        let productData = {
            name: this.state.productName,
            price: this.state.productPrice,
            path: `/img/${this.state.image.name}`,
            category_id: this.state.selectedCategoryId
        }
        console.log(productData);
        axios.post("http://localhost:5000/products", qs.stringify(productData)).then(
            response => {
                window.alert("Product successfully added");
                this.props.history.push('/')
                console.log(response);
            },
            error => {
                window.alert("Error while adding product " + error);
            }
        )
    }

    onFileChange = event => {
        console.log(event.target.files[0]);
        this.setState({
            image: event.target.files[0]
        });
    }


    handleProductNameChanged = event => {
        this.setState({
            productName: event.target.value
        })
    }

    handleProductPriceChanged = event => {
        this.setState({
            productPrice: event.target.value
        });

    }


    render() {
        return <div className="h-full flex justify-center items-center gap-5 m-5 p-5 text-xl ">
            <form className="flex m-5 p-5 flex-col border-2 rounded-md border-red-400 bg-gray-100 shadow-lg">
                <h1 className="text-center text-2xl">Dodaj proizvod< /h1>
                <hr className="border mt-2"/>
                <div className="pt-5">

                    <div className="pd-5">
                        <label htmlFor="name">Naziv Proizvoda</label>
                        <br/>
                        <input type="text" id="name"
                               className="pd-5 rounded-md px-5 border-2 border-red-400  w-full h-auto"
                               value={this.state.productName}
                               onChange={this.handleProductNameChanged}
                        />
                    </div>
                    <div >
                        <label htmlFor="image" className="my-5 py-5 w-auto">Slika</label>
                        <br/>
                        <input type="file" id="image" name="file"
                               className="pd-5 rounded-md px-5  h-auto w-auto"
                               onChange={this.onFileChange}
                        />
                    </div>

                    <label htmlFor="categories" className="p-1 m-2">Kategorija </label>
                    <br/>
                    <select name="category" id="categories" className="w-full m-2 border-2 border-red-400 rounded-md"
                            placeholder="Izaberi kategoriju "
                            value={this.state.selectedCategoryId} onChange={this.handleCategoryChange}>
                        {this.state.kategorije.map(
                            (kategorija) => <option value={kategorija.id}>{kategorija.name}</option>
                        )}
                    </select>
                </div>
                <div className="pd-5">
                    <label htmlFor="price">Cijena</label>
                    <br/>
                    <input type="number" id="price"
                           className="pd-5 rounded-md px-5 border-2 border-red-400 w-full"
                           value={this.state.productPrice}
                           onChange={this.handleProductPriceChanged}
                    />
                </div>

                <button
                    className="mt-5 border-2 text-center border-red-400  rounded-md  font-semibold  text-red-600
                             hover:bg-red-400 hover:text-white flex items-center justify-center"
                    onClick={this.onButtonClick}>
                    Dodaj Proizvod
                </button>
                <hr className="border mt-5 mb-3 "/>
            </form>
        </div>
    }

}

export default withRouter(AdminPanel);
