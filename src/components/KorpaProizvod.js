import React from "react";
import {Link, withRouter} from "react-router-dom";
import axios from "axios";


class KorpaProizvod extends React.Component {

    constructor(props) {
        super(props);
        this.state = {amount: 1};
        this.state.productPrice = this.props.cijenaProizvoda;
        this.state.totalPrice = this.props.cijenaProizvoda;
        this.state.productId = this.props.productId;
    }

    amountChanged = event => {
        console.log('Amount changed on product with id ' + this.state.productId);
        if (this.state.amount > 1) {}
        this.setState({
            amount: event.target.value,
            totalPrice : event.target.value * this.state.productPrice
        });
        this.props.handlePriceChange(this.state.productId, event.target.value);
    }

    removeProductFromCart = event => {
        console.log(this.state.productId);
        axios.delete(`http://localhost:5000/cartProducts/${this.state.productId}`).then(
            response => {
                // window.alert("Product successfully deleted");
                this.props.history.push({pathname: '/cart'});
            },
            err => {
                window.alert("Error while deleting product from cart ", err);
            }
        );
    }

    render() {
        return <div className="flex justify-around items-center ">
            <div className="grid grid-cols-3  rounded-lg  m-5 bg-gray-200 shadow-xl border-2 border-white">
                <div className="col-span-1 w-64 flex items-center justify-around ml-5 p-2">
                    <img src={this.props.putanja} alt="Zemlja Snova" className="rounded-md h-72 mr-3 object-cover"/>
                </div>
                <div className="col-span-2 w-full text-center">
                    <div className="flex justify-around items-center border-b-2 border-white m-3 p-2">
                        <div className=" text-center">{this.props.nazivProizvoda}</div>
                    </div>
                    <div className="flex justify-around items-center border-b-2 border-white m-3 p-2">
                        <div className=" text-center">Cijena proizvoda</div>
                        <div className="uppercase text-center">€ {this.props.cijenaProizvoda}</div>
                    </div>
                    <div className="flex justify-around items-center border-b-2 border-white m-3 p-2">
                        <label htmlFor="amount">Količina</label>
                        <input type="number" id="#amount" className="w-32 text-center border-2 border-black rounded-lg"
                               value={this.state.amount }
                               onChange={this.amountChanged}
                        />
                    </div>
                    <div className="flex justify-around items-center border-b-2 border-white m-3 p-2">
                        <div className="text-center w-64  border-2 border-red-400  rounded-2xl text-red-600 font-semibold  hover:bg-red-400
                   hover:text-white">
                            <Link to='/#' onClick={this.removeProductFromCart.bind(this)} >Ukloni Iz Korpe</Link>
                        </div>
                    </div>
                    <div className="flex justify-around items-center m-3 p-2">
                        <div className="uppercase text-center">Ukupna cijena
                            €   {this.state.totalPrice}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default withRouter(KorpaProizvod);
