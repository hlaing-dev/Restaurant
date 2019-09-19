import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import Price from './price';
import OldOrderList from './old_order_list';
import NewOrderList from './new_order_list';

class History extends Component {
  render() {
    return (
      <div>
        <Router>
          <Tabs className="bg-dark" style={{ padding: 10 }}>
            <TabList>
              <Tab style={{ background: 'transparent' }}><Link to="/dessert" style={{ color: '#d1d1d1' }}>Price</Link></Tab>
              <Tab style={{ background: 'transparent' }}><Link to="/drink" style={{ color: '#d1d1d1' }}>Old Order List</Link></Tab>
              <Tab style={{ background: 'transparent' }}><Link to="/salad" style={{ color: '#d1d1d1' }}>New Order List</Link></Tab>
            </TabList>

            <TabPanel><Price /></TabPanel>
            <TabPanel><OldOrderList /></TabPanel>
            <TabPanel><NewOrderList /></TabPanel>
          </Tabs>
        </Router>
      </div>
    )
  }
}

export default History;