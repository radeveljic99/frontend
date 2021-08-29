import React from "react";
import KorpaProizvod from "./KorpaProizvod";
import korpaElementi from "../data/korpaElementi";

class Korpa extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.proizvodi = korpaElementi;
        console.log(this.state.proizvodi);
    }


    render() {
        return <div className="text-center text-xl mx-5 p-5">
            <h1 className="text-red-600 text-3xl"> Vaša Korpa</h1>
            {
                this.state.proizvodi.map((proizvod) => <KorpaProizvod
                    nazivProizvoda={proizvod.naziv}
                    cijenaProizvoda={proizvod.cijena}
                    putanja={proizvod.putanja}
                />)
            }
            <div className="flex justify-around items-center ">
                <div
                    className="flex justify-around items-center text-center p-2 border-2 rounded-lg w-96 border-gray-300 shadow-lg">
                    <div className="text-center w-36 border-2 border-red-400  rounded-2xl text-red-600 font-semibold  hover:bg-red-400
                   hover:text-white">
                        <a href="#">NARUČI</a>
                    </div>
                </div>
            </div>
        </div>

    }
}

export default Korpa;
