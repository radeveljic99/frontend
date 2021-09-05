import React from "react";
import axios from "axios";
import storage from "../firebase";


class AdminPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.image = null;
        this.state.kategorije = [];
        this.state.selectedCategoryId = 0;
        this.state.file = null;
        this.state.data = [];
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
                window.alert("Error while loading cateogories ", error);
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
                window.alert("Error while loading cateogories ", error);
            }
        );


    }

    handleChange = event => {
        event.preventDefault();
        console.log("category = " + event.target.value);
        this.setState({
            selectedCategoryId: event.target.value
        });
    }

    onButtonClick = event => {
        event.preventDefault();
        console.log(this.state);
        if (this.state.image == null)
            return;
        storage.ref(`/img/${this.state.image.name}`).put(this.state.image)
            .on("state_changed", alert("success"), alert);


    }

    // let files = event.target.files;
    // console.log(files);
    //
    // let reader = new FileReader();
    // reader.readAsDataURL(files[0]);
    // reader.onload = event => {
    //     console.log(' img data ', event.target.result);
    // }

    // console.log(event.target.files[0]);
    // if (event.target.files[0]) {
    //     this.setState({
    //         file: URL.createObjectURL(event.target.files[0])
    //     })
    // }

    onChange = event => {
        // console.log('On change called');
        // const reader = new FileReader();
        // let file = event.target.files[0];
        // if (file) {
        //     reader.onload = () => {
        //         if (reader.readyState === 2) {
        //             console.log(file);
        //             this.setState({
        //                 image: file
        //             });
        //         }
        //     };
        //     reader.readAsDataURL(event.target.files[0]);
        // } else {
        //     this.setState({
        //         image: null
        //     });
        // }
        this.setState({
            image:event.target.files[0]
        });
    }

    // uploadToFirebase = () => {
    //     console.log(this.state);
    //     if (this.state.image) {
    //         window.alert('USO');
    //         console.log(this.state.image);
    //         const storageRef = storage.ref();
    //         const imageRef = storageRef.child(this.state.image.name);
    //         imageRef.put(this.state.image).then(
    //             () => {
    //                 window.alert("Image uploaded successfully to Firebase.");
    //             },
    //             () => {
    //                 window.alert("Something went wrong");
    //             });
    //     } else {
    //         window.alert("Please upload an image first");
    //     }
    // }

    // getFromFirebase = () => {
    //     let storageRef = storage.ref();
    //     storageRef.listAll().then( (res)=> {
    //         res.items.forEach((imageRef) => {
    //             imageRef.getDownloadURL().then((url) => {
    //                 window.alert("Mijenja se stanje");
    //                 this.setState({
    //                    allImages : [...this.state.allImages, url]
    //                 });
    //             })
    //         })
    //     })
    // }

    listItems = () => {

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
                        />
                    </div>
                    <div className="pd-5">
                        <label htmlFor="image" className="my-5 py-5 w-auto">Slika</label>
                        <br/>
                        <input type="file" id="image" name="file" accept="image/x-png,image/jpeg"
                               className="pd-5 rounded-md px-5  h-auto w-auto"
                               onChange={this.onChange}
                        />
                    </div>

                    <label htmlFor="categories" className="p-1 m-2">Kategorija </label>
                    <br/>
                    <select name="category" id="categories" className="w-full m-2"
                            placeholder="Izaberi kategoriju "
                            value={this.state.selectedCategoryId} onChange={this.handleChange}>
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
                    />
                </div>

                <button
                    className="mt-5 border-2 text-center border-red-400  rounded-md  font-semibold  text-red-600
                             hover:bg-red-400 hover:text-white flex items-center justify-center"
                    onClick={this.onButtonClick}>
                    Dodaj Proizvod
                </button>
                <button onClick={this.listItems}>List Pictures</button>
                <hr className="border mt-5 mb-3 "/>
            </form>
        </div>
    }

}

export default AdminPanel;
