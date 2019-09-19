import React, { Component } from 'react';
import KumoInputBox from '../elements/kumoInputBox';

class Menu_List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table: [],
    }
  }

  componentDidMount() {
    fetch('http://restaurant.com:5005/table')
      .then(res => res.json())
      .then(
        data => this.setState({ table: data }),
        error => this.setState({ error })
      )
  }

  render() {
    return (
      <div className='bg-light p-1 m-2'>
        <h2>Table List</h2>

        {/* The modal */}
        <button type="button" className="btn btn-outline-info" data-toggle="modal" data-target="#myModal">Add Table</button>
        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header"><h3>Add New Table</h3>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body">
                <label>Table Number</label>
                <KumoInputBox />

                {/* <label>Date</label>
                <KumoInputBox /> */}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default">Add</button>
                <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
              </div>
            </div>

          </div>
        </div>

        <div className="table-responsive pt-2">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>{"Table ID"}</th>
                <th>{"Table Number"}</th>
                <th>{"Active"}</th>
              </tr>
            </thead>

            <tbody>
              {this.state.table.map((tables, key) => {
                return <tr key={key}>
                  <td>{tables.table_id}</td>
                  <td>{tables.table_lists}</td>
                  <td>{tables.active ? "True" : "False"}</td>
                  {/* <td> <i className="fa fa-trash" />  </td> */}
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
                  <label>Menu ID</label>
                  <KumoInputBox />

                  <label>Menu</label>
                  <KumoInputBox />

                  <label>Price</label>
                  <KumoInputBox />

               
                </div>

                <div className="modal-footer">
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

export default Menu_List;