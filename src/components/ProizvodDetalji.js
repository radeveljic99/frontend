import React from "react";

class ProizvodDetalji extends React.Component {

    render() {
        return <div>
            <h1 className="text-3xl text-red-600 text-center m-5 p-5"> Detalji o proizvodu </h1>
            <div className="flex justify-around items-baseline m-5 pb-5">
                <div className="grid grid-cols-2 grid-flow-row rounded-xl border border-red-400  shadow-xl">
                    <div className="p-3 "><img src="/img/zs1.png" alt="Zemlja Snova" className="rounded-xl "/></div>
                    <div className="m-5 p-5 text-center">
                        <div className="m-5 p-5"><h1 className="text-red-600 text-2xl mb-5 pb-5"> Haljina Zuta </h1>
                            <div className="flex justify-around items-center ">
                                <div className="px-5 m-5 text-xl text-bold"><p>Cijena </p></div>
                                <div className="px-5 m-5 text-xl"><p> € 50</p></div>
                            </div>
                            <hr/>
                                <div className="flex justify-around items-center">
                                    <div className="px-5 m-5 text-xl text-bold"><p>Kategorija </p></div>
                                    <div className="px-5 m-5 text-xl"><p> Proljece Ljeto</p></div>
                                </div>
                                <hr/>
                        </div>

                        <div className="flex justify-around items-end h-52">
                            <div className="text-center w-36 border-2 border-red-400 mb-1 p-2 rounded-2xl text-red-600 font-semibold  hover:bg-red-400
                    hover:text-white">
                                <a href="#">Dodaj u korpu</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    }

    }

    export default ProizvodDetalji;