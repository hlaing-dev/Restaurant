import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import TodaySpecial from './today_special';
import Dessert from './dessert';
import Drink from './drink';
import Salad from './salad';

class FoodGallery extends Component {
  render() {
    return (
      <div>
        <Router>
          <Tabs className="bg-dark" style={{ padding: 10 }}>
            <TabList>
              <Tab style={{ background: 'transparent' }}><Link to="/today_special" style={{ color: '#d1d1d1' }}>Today's Special</Link></Tab>
              <Tab style={{ background: 'transparent' }}><Link to="/dessert" style={{ color: '#d1d1d1' }}>Dessert</Link></Tab>
              <Tab style={{ background: 'transparent' }}><Link to="/drink" style={{ color: '#d1d1d1' }}>Drink</Link></Tab>
              <Tab style={{ background: 'transparent' }}><Link to="/salad" style={{ color: '#d1d1d1' }}>Salad</Link></Tab>
            </TabList>

            <TabPanel><TodaySpecial/></TabPanel>
            <TabPanel><Dessert /></TabPanel>
            <TabPanel><Drink /></TabPanel>
            <TabPanel><Salad /></TabPanel>
          </Tabs>
        </Router>
      </div>
    )
  }
}

export default FoodGallery;