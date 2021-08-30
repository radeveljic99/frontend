import React from "react";
import Proizvod from "./Proizvod.js";
import proizvodi from "../data/proizvodi";
import Pagination from "./Pagination";
import Kategorije from "./Kategorije";
import axios from "axios";

class Pocetna extends React.Component {

    constructor(props) {
        super(props);
        this.state = {proizvodi:[], kategorije:[], proizovdiSlider : [
                {
                    "id": 1,
                    "name": "Haljina Žuta Made in Turkey",
                    "price": 120,
                    "path": "/img/zs1.png",
                    "category_id": 1
                },
                {
                    "id": 2,
                    "name": "Haljina Narandzasta Pruge",
                    "price": 70,
                    "path": "/img/zs2.png",
                    "category_id": 1
                }
            ]};
        console.log(this.state);
      //  this.handleCategoryChange({id:1, name:"Proljeće/Ljeto"});
        this.state.selectedCategory = {id:1, name:''};
    }

    componentDidMount() {
        axios.get("http://localhost:5000/categories/first").then(
            response => {
                this.setState({selectedCategory: response.data[0]});
                this.handleCategoryChange(response.data[0]);
            },
            error => {
                window.alert('Error while loading products : ' + error);
            }
        );
    }


    handleCategoryChange = (categoryData) => {
        console.log(categoryData);
        axios.get(`http://localhost:5000/categories/${categoryData.id}/products`).then(
            response => {
                this.setState({
                    proizvodi:response.data,
                    selectedCategory: categoryData
                })
            },
            error => {
                window.alert("Error while loading products: " + error);
            }
        );
    }

    render() {
        return <div>
            <div className="grid grid-cols-5 grid-flow-row p-2 space-x-8">
                <Kategorije kategorije={this.state.kategorije} onCategoryChange={this.handleCategoryChange}/>
                <div className="col-span-4">

                    {/*<div className="slider">*/}
                    {/*    <div>I am a slide.</div>*/}
                    {/*    <div>I am another slide.</div>*/}
                    {/*</div>*/}
                    <div class="slider">
                        <div className="grid grid-flow-row grid-cols-3  gap-12 p-5 m-5 ">
                            {
                                this.state.proizvodi.map((product) => <Proizvod
                                    key={product.id}
                                    id={product.id}
                                    putanja={product.path}
                                    cijena={product.price}
                                    naziv={product.name}
                                    kategorija={product.category_id}/>)
                            }
                        </div>
                    </div>



                    <h1 className="text-center text-3xl pt-2 upperacase">{this.state.selectedCategory.name === '' ?
                        'Svi proizvodi' : this.state.selectedCategory.name}</h1>

                    <div className="grid grid-flow-row grid-cols-3  gap-12 p-5 m-5 ">
                        {
                            this.state.proizvodi.map((product) => <Proizvod
                                key={product.id}
                                id={product.id}
                                putanja={product.path}
                                cijena={product.price}
                                naziv={product.name}
                                kategorija={product.category_id}/>)
                        }
                    </div>
                </div>
            </div>
            <Pagination/>
        </div>
    }
}

export default Pocetna;
