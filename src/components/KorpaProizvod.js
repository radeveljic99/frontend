import React from "react";


class KorpaProizvod extends React.Component {

    constructor(props) {
        super(props);
        this.state = {amount: 1};
    }

    render() {
        return <div className="flex justify-around items-center">
            <div className="grid grid-cols-3 border-2 border-gray-300 rounded-lg  m-5  shadow-xl ">
                <div className="col-span-1 w-64 flex items-center justify-around ml-5 p-2">
                    <img src={this.props.putanja} alt="Zemlja Snova" className="rounded-md h-72 mr-3 object-cover"/>
                </div>
                <div className="col-span-2 w-full text-center">
                    <div className="flex justify-around items-center border-b-2 border-gray-300 m-3 p-2">
                        <div className="uppercase text-center">naziv proizvoda</div>
                        <div className="uppercase text-center">{this.props.nazivProizvoda}</div>
                    </div>
                    <div className="flex justify-around items-center border-b-2 border-gray-300 m-3 p-2">
                        <div className="uppercase text-center">cijena proizvoda</div>
                        <div className="uppercase text-center">€ {this.props.cijenaProizvoda}</div>
                    </div>
                    <div className="flex justify-around items-center border-b-2 border-gray-300 m-3 p-2">
                        <label htmlFor="amount">Kolicina</label>
                        <input type="number" id="#amount" className="border-2 border-black rounded-lg"
                               value={this.state.amount > 1 ? this.state.amount : 0}
                        />
                    </div>
                    <div className="flex justify-around items-center border-b-2 border-gray-300 m-3 p-2">
                        <div className="text-center w-64  border-2 border-red-400  rounded-2xl text-red-600 font-semibold  hover:bg-red-400
                   hover:text-white">
                            <a href="#">Ukloni</a>
                        </div>
                    </div>
                    <div className="flex justify-around items-center m-3 p-2">
                        <div className="uppercase text-center">Ukupna cijena
                            € 50
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default KorpaProizvod;