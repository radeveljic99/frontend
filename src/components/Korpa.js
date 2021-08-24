import React from "react";

class Korpa extends React.Component {

    render() {
        return <div className="text-center text-xl mx-5 p-5">
            <h1 className="text-red-600 text-3xl"> Vaša Korpa</h1>
            <div className="flex justify-around items-center">
                <div className="grid grid-cols-3 border-2 border-gray-300 rounded-lg  m-5  shadow-xl "
                     style="width:70vw">
                    <div className="col-span-1 w-64 flex items-center justify-around ml-5 p-2">
                        <img src="img/zs1.png" alt="Zemlja Snova" className="rounded-md h-72 mr-3"/>
                    </div>
                    <div className="col-span-2 w-full text-center">
                        <div className="flex justify-around items-center border-b-2 border-gray-300 m-3 p-2">
                            <div className="uppercase text-center">naziv proizvoda</div>
                            <div className="uppercase text-center">zuta haljina</div>
                        </div>
                        <div className="flex justify-around items-center border-b-2 border-gray-300 m-3 p-2">
                            <div className="uppercase text-center">cijena proizvoda</div>
                            <div className="uppercase text-center">€ 50</div>
                        </div>
                        <div className="flex justify-around items-center border-b-2 border-gray-300 m-3 p-2">
                            <label htmlFor="amount">Kolicina</label>
                            <input type="number" id="#amount" className="border-2 border-black rounded-lg "/>
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

            <div className="flex justify-around items-center">
                <div className="grid grid-cols-3 border-2 border-gray-300 rounded-lg  m-5  shadow-xl "
                     style="width:70vw">
                    <div className="col-span-1 w-64 flex items-center justify-around ml-5 p-2">
                        <img src="./img/zs1.png" alt="Zemlja Snova" className="rounded-md h-72 mr-3"/>
                    </div>
                    <div className="col-span-2 w-full text-center">
                        <div className="flex justify-around items-center border-b-2 border-gray-300 m-3 p-2">
                            <div className="uppercase text-center">naziv proizvoda</div>
                            <div className="uppercase text-center">zuta haljina</div>
                        </div>
                        <div className="flex justify-around items-center border-b-2 border-gray-300 m-3 p-2">
                            <div className="uppercase text-center">cijena proizvoda</div>
                            <div className="uppercase text-center">€ 50</div>
                        </div>
                        <div className="flex justify-around items-center border-b-2 border-gray-300 m-3 p-2">
                            <label htmlFor="amount">Kolicina</label>
                            <input type="number" id="#amount" className="border-2 border-black rounded-lg "/>
                        </div>
                        <div className="flex justify-around items-center border-b-2 border-gray-300 m-3 p-2">
                            <div className="text-center w-64 border-2 border-red-400  rounded-2xl text-red-600 font-semibold  hover:bg-red-400
                   hover:text-white">
                                <a href="#">Ukloni</a>
                            </div>
                        </div>
                        <div className="flex justify-around items-center  m-3 p-2">
                            <div className="uppercase text-center">Ukupna cijena
                                € 50
                            </div>
                        </div>

                    </div>
                </div>
            </div>
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