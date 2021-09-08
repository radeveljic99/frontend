import React from "react";
import Proizvod from "./Proizvod.js";
import Pagination from "./Pagination";
import Kategorije from "./Kategorije";
import axios from "axios";

class Pocetna extends React.Component {

    constructor(props) {
        super(props);
        this.state = {proizvodi: [], kategorije: []};
        console.log(this.state);
        this.state.selectedCategory = {id: 1, name: ''};
        this.state.search = this.props.search;
    }

    componentDidMount() {
        console.log(this.state.search);
        if (this.state.search === '') {
            axios.get("http://localhost:5000/categories/first").then(
                response => {
                    this.setState({selectedCategory: response.data[0]});
                    this.handleCategoryChange(response.data[0]);
                },
                error => {
                    window.alert('Error while loading products : ' + error);
                }
            );
        } else {
            this.setState({
                searching: true
            });
            axios.get(`http://localhost:5000/products/searchProducts?search=${this.state.search}`).then(
                response => {
                    this.setState({
                        proizvodi: response.data,
                        searching: false
                    });

                }, error => {
                    window.alert("Error occured!" + error);
                }
            )
        }

    }

    handleCategoryChange = (categoryData) => {
        console.log(categoryData);
        axios.get(`http://localhost:5000/categories/${categoryData.id}/products`).then(
            response => {
                this.setState({
                    proizvodi: response.data,
                    selectedCategory: categoryData,
                    search: ''
                })
            },
            error => {
                window.alert("Error while loading products: " + error);
            }
        );
    }

    render() {
        return <div>
            <div className="grid grid-cols-5 grid-flow-row p-2 space-x-8 static">
                <Kategorije kategorije={this.state.kategorije} onCategoryChange={this.handleCategoryChange}/>
                <div className="col-span-4">

                    <h1 className="text-center text-3xl pt-2 upperacase">{this.state.selectedCategory.name === '' ?
                        'Rezultati pretrage' : this.state.selectedCategory.name}</h1>

                    {
                        this.state.selectedCategory.id === 1 && this.state.search === '' ?
                            <video width="95%" className="rounded-lg m-5 p-5" playsInline autoPlay="autoplay" loop
                                   muted>
                                <source src="http://localhost:5000/img/zs.mp4" type="video/mp4"/>
                                <source src="mov_bbb.ogg" type="video/ogg"/>
                                Your browser does not support HTML video.
                            </video> : ''
                    }
                    <div className="grid grid-flow-row sm:grid-cols-1 md:grid-cols-3 2xl:grid-cols-4  gap-12 p-5 m-5 ">
                        {
                            this.state.proizvodi.map((product) => <Proizvod
                                key={product.id}
                                id={product.id}
                                putanja={`http://localhost:5000${product.path}`}
                                cijena={product.price}
                                naziv={product.name}
                                kategorija={this.state.selectedCategory}
                                cartChanged={this.props.cartChanged}
                            />)

                        }

                    </div>
                    {this.state.proizvodi.length === 0 ?
                        <h1 className="text-center text-xl"> Nijedan proizvod nije pronađen</h1> : ''
                    }

                </div>
            </div>
            {
                this.state.proizvodi.length !== 0 ? <Pagination/> : ''
            }

        </div>
    }
}

export default Pocetna;
