import React, { Component } from 'react';
import KumoInputBox from '../elements/kumoInputBox';
import axios from 'axios';

export default class Menu_List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      category_id: '',
      category_lists: '',
      status: ''
    }
  }

  componentDidMount() {
    fetch('http://restaurant.com:5005/category')
      .then(res => res.json())
      .then(
        data => this.setState({ category: data }),
        error => this.setState({ error })
      )
  }

  changeHandler = (e) => {
    this.setState ({ [e.target.name]: e.target.value})
  }


  handleSubmit = (e) => {
    e.preventDefault ()
    console.log (this.state)
    axios
    .post('http://restaurant.com:5005/category', 
    {
      category_lists:this.category_lists,
      status:this.status
    })
    .then (response => {
      console.log(response)
    })
    .then(error => {
      console.log (error)
    })
  }

  render() {
    const { category_id, category_lists, status } = this.state;
    return (
      <div className='bg-light p-1 m-2'>
        <h2>Category List</h2>

        <form className="form-inline" onSubmit={this.handleSubmit}>
          <label>Category Name</label>&nbsp;
          <input type="text"
            name="category_lists"
            value={category_lists}
            onChange={this.changeHandler}
            placeholder="Enter New Category"
          /> &nbsp;

          <input type="text"
            name="status"
            value={status}
            onChange={this.changeHandler}
            placeholder="Enter Status"
          /> &nbsp;

          {/* <KumoInputBox className="form-control" placeholder="Enter new category" required="required"/> &nbsp; &nbsp; */}
          <button type="submit"
            className="btn btn-outline-info"
             >
               {/* onClick={e => this.onSubmit(e)} */}
            Add New
          </button>
        </form>

        <div className="table-responsive pt-2">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>{"Category ID"}</th>
                <th>{"Category Name"}</th>
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
                  <td><i className="fa fa-edit" data-toggle="modal" data-target="#myModal" />  </td>
                  <td> <i className="fa fa-trash" />  </td>
                </tr>
              })}
            </tbody>
          </table>

          {/* The Modal */}
          <div className="modal fade" id="myModal">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Edit Menu</h4>
                  <button type="button" className="close" data-dismiss="modal">×</button>
                </div>

                <div className="modal-body">
                  <label>Category ID</label>
                  <KumoInputBox />

                  <label>Category Name</label>
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
