import React, { Component } from 'react';
const product = [
  { productID: 'P-001', image: 'salad/crab_salad.jpg', name: 'Crab Salae', type: 'Drink', price: 2000 }
]

class Salad extends Component {
  render() {
    return (
      <div className="row pb-2">
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
    )
  }
}

export default Salad;