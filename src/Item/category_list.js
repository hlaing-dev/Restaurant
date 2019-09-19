import React, { Component } from 'react';
import KumoInputBox from '../elements/kumoInputBox';
import axios from 'axios';

export default class Menu_List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      category_lists: ''
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
    this.setState({ category_lists: e.target.value })
  }

  //Add Category List
  handleSubmit = () => {
    console.log(this.state)
    axios
      .post('http://restaurant.com:5005/add/category',
        {
          category_lists: this.state.category_lists,
        })
      .then(response => {
        console.log(response)
      })
      .then(error => {
        console.log(error)
      })
  }

  //Alert Message for Create Category Lists
  clickAdd =() =>{
    alert ('New Category List is added successfully!')
  }

  //Edit Category List
  handleEdit = () => {
    // e.preventDefault()
    console.log(this.state)
    axios
      .post('http://restaurant.com:5005/edit/category/:id',
        {
          category_lists: this.state.category_lists,
        })
      .then(response => {
        console.log(response)
      })
      .then(error => {
        console.log(error)
      })
  }

  //Alert Message for Edit Category Lists
  clickEdit = ()=>{
    alert('Your category list is edited successfully!')
  }

  changeHandlerUpdate = (e) => {
    this.setState({ category_lists: e.target.value })
  }

  render() {
    const category_lists = this.state.category_lists;
    // console.log(category_lists);

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
          <button type="submit" className="btn btn-outline-info" onClick={this.clickAdd} >Add New</button>
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
                  <td><i className="fa fa-edit" data-toggle="modal" data-target="#myModal" /></td>
                  <td><i className="fa fa-trash" /></td>
                </tr>
              })}
            </tbody>
          </table>

          {/* The Modal */}
          <div className="modal fade" id="myModal">
            <div className="modal-dialog modal-dialog-centered">
           
              <form className="modal-content" onSubmit={this.handleEdit}>
                <div className="modal-header">
                  <h4 className="modal-title">Edit Category</h4>
                  <button type="button" className="close" data-dismiss="modal">×</button>
                </div>

                <div className="modal-body">
                  <label>Category ID</label>
                  <KumoInputBox/>

                  <label>Category Name</label>
                  <KumoInputBox onChange={this.changeHandlerUpdate} value={this.state.category_lists} />
                </div>

                <div className="modal-footer">
                  <button type="submit" className="btn btn-secondary" data-dismiss="modal" onClick={this.clickEdit}>Edit</button>
                  <button type="submit" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
