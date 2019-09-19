import React, { Component } from 'react';
import KumoInputBox from '../elements/kumoInputBox';
import axios from 'axios';

export default class Menu_List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: []
    }
  }

  componentDidMount() {
    fetch('http://restaurant.com:5005/price')
      .then(res => res.json())
      .then(
        data => this.setState({ price: data }),
        error => this.setState({ error })
      )
  }

  changeHandler = (e) => {
    this.setState({ category_lists: e.target.value })
  }

  //Add Price
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    axios
      .post('http://restaurant.com:5005/add/price',
        {
          category_lists: this.state.category_lists
        })
      .then(response => {
        console.log(response)
      })
      .then(error => {
        console.log(error)
      })
  }


  //Remove Category List


  render() {
    const category_lists = this.state.category_lists;
    // console.log(category_lists);

    return (
      <div className='bg-light p-1 m-2'>
        <h2>Price List</h2>

        <form className="form-inline" onSubmit={this.handleSubmit}>
          <label>Price</label>&nbsp;
          <input type="text"
            name="category_lists"
            value={category_lists}
            onChange={this.changeHandler}
            placeholder="Enter New Price"
          /> &nbsp;
          <button type="submit" className="btn btn-outline-info" >Add New</button>
        </form>

        <div className="table-responsive pt-2">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>{"Price ID"}</th>
                <th>{"Price"}</th>
                <th>{"Active"}</th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {this.state.category.map((categories, key) => {
                return <tr key={key}>
                  <td>{categories.category_id}</td>
                  <td>{categories.category_lists}</td>
                  <td>{categories.status ? "True" : "False"}</td>
                  <td><i className="fa fa-edit" data-toggle="modal" data-target="#myModal" /></td>
                  <td><i className="fa fa-trash" /></td>
                </tr>
              })}
            </tbody>
          </table>

          {/* The Modal */}
          <div className="modal fade" id="myModal">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Edit Price</h4>
                  <button type="button" className="close" data-dismiss="modal">×</button>
                </div>

                <div className="modal-body">
                  <label>Price ID</label>
                  <KumoInputBox />

                  <label>Price</label>
                  <KumoInputBox />
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Edit</button>
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
