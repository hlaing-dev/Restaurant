import React, { Component } from 'react';
import KumoInputBox from '../elements/kumoInputBox';

class Menu_List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
    }
  }

  componentDidMount() {
    fetch('http://restaurant.com:5005/category')
      .then(res => res.json())
      .then(
        data => this.setState({ category: data }),
        error => this.setState ({error})
      )
  }

  render() {
    return (
      <div className='bg-light p-1 m-2'>
        <h2>Item List</h2>
        <div className="table-responsive">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>{"Category ID"}</th>
                <th>{"Category List"}</th>
                <th>{"Date"}</th>
                {/* <th>{"Price"}</th>
                          <th>{"Active"}</th> */}
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {/* {this.state.category.map ((categories, key) => {
                          return <tr key={key}>
                              <td>{categories.category_id}</td>
                              <td>{categories.category_lists}</td>
                              <td>{categories.date}</td>
                              <td>{v.price}</td>
                          <td>{v.active ? "True" : "False"}</td>
                          <td><i className="fa fa-edit" data-toggle="modal" data-target="#myModal"/>  </td>
                          <td> <i className="fa fa-trash"/>  </td>
                          </tr>
                      })} */}

              <tr>
                <td>1</td>
                <td>Dessert</td>
                <td><i className="fa fa-edit" data-toggle="modal" data-target="#myModal" /></td>
              </tr>

              {/* The Modal */}
              <div className="modal fade" id="myModal">
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title">Edit Menu</h4>
                      <button type="button" className="close" data-dismiss="modal">×</button>
                    </div>


                    <div className="modal-body">
                      <label>Menu ID</label>
                      <KumoInputBox />

                      <label>Menu</label>
                      <KumoInputBox />

                      <label>Price</label>
                      <KumoInputBox />

                      <label>Date</label>
                      <KumoInputBox type="date"/>
                    </div>

                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                    </div>
                  </div>
                </div>
              </div>

            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Menu_List;