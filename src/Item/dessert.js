import React, { Component } from 'react';

class Dessert extends Component {
  constructor(props){
    super(props);
    this.state={
      dessert:[]
    }
  }

  componentDidMount() {
    fetch('http://restaurant.com:5005/product')
      .then(res => res.json())
      .then(
        data => this.setState({ dessert: data }),
        error => this.setState({ error })
      )
      }
  
  orderDessert=()=>{
    console.log('Ordered')
  }

  render() {
    return (
      <div className="row pb-2">
      {this.state.dessert.map((desserts, key) => (
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3" key={key} >
            <div className="card mt-2" style={{ textAlign: 'center', padding: 10, background: '#f9f2ec' }}>
              <img className="img-thumbnail" src={require(`../image/${desserts.image}`)} alt='Product' />
              <div className="card-body">
                <label><b>Name:</b> {desserts.name}</label><br />
                <label><b>Type:</b> {desserts.type}</label><br />
                <label><b>Price:</b>{desserts.price}</label>
              </div>
              <button type="button" className="btn btn-outline-success">Order</button>
            </div>
          </div>
        ))}
      
      </div>
    )
  }
}

export default Dessert;