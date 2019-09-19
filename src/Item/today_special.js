import React, { Component } from 'react';

const product = [
    { productID: 'P-001', image: 'drink/peach_pineapple.jpg', name: 'Peach Pineapple', type: 'Drink', price: 2000 },
    { productID: 'P-0041', image: 'salad/crab_salad.jpg', name: 'Crab Salad', type: 'Salad', price: 2000 }
]


class This_month extends Component {
    render() {
        console.log(product[0].image);
        
        return (
            <div className="container-fluid bg-dark p-2" style={{ textAlign: 'center' }}>
                <h5 style={{ color: '#d1d1d1' }}>
                    <i className="fa fa-heart" /><i>Today's Special</i><i className="fa fa-heart" />
                </h5>

                <div className="row pb-2 d-flex justify-content-center">
                {product.map((products, key) => (
                    <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3" key={key} >
                            <div className="card mt-2" style={{ textAlign: 'center', padding: 10, background: '#f9f2ec' }}>
                                <img className="img-thumbnail" src={require(`../image/${products.image}`)} alt='Product' />
                                <div className="card-body">
                                    <label><b>Name:</b> {products.name}</label><br />
                                    <label><b>Type:</b> {products.type}</label><br />
                                    <label><b>Price:</b>{products.price}</label>
                                </div>
                                <button type="button" className="btn btn-outline-success">Order</button>
                            </div>
                    </div>
                    ))}
                </div>

            </div>
        )
    }
}

export default This_month;