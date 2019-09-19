import React, { Component } from 'react'
//import KumoInputBox from '../elements/kumoInputBox';
import KumoButton from '../elements/kumoButton';
import axios from 'axios';

class AddItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);

        reader.onload = (e) => {
            this.setState({
                file: e.target.result
            })
        }
    }

    handleButtonClick = (event) =>{
        event.preventDefault();
        console.log(this.state.file);
        axios.post('http://restaurant.com:5005/add/product',{
            headers: {
                'content-type': 'multipart/form-data'
              },
            file:this.state.file
        })
        .then(res=>{
            console.log(res.data);
        })
        .catch(err=>console.log(err));
    }
    render() {
        const { product_name, price, categories_list, description, image} = this.state;
        return (
            <div className="container-fluid bg-dark p-3">
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-4 bg-light d-flex align-items-center">
                        <figure className="figure mx-auto">
                            {this.state.file && (
                                <img className="img-thumbnail" alt="Item" src={this.state.file} value={image} style={{ width: "100%" }} />
                            )}
                            <figcaption className="figure-caption" style={{ textAlign: 'center' }}>Item Image</figcaption>
                        </figure>
                    </div>

                    <div className="col-lg-4 col-md-4 bg-light p-3">
                        <h3 style={{ textAlign: 'center' }}>Add Item</h3>

                        

                       
                        <label>Description</label>
                        <textarea placeholder='Description' type="text" value={description} className="form-control" />

                        <label>Image</label><br />
                        <input type="file" name="file" onChange={this.handleChange}  />

                        <KumoButton text="Add" className="mt-4" onClick={this.handleButtonClick.bind(this)}></KumoButton>
                    </div>
                </div>
            </div>

        )
    }

}
export default AddItem;