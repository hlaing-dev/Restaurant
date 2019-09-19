import React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import Navbar from '../Header/navbar';
import Sidebar from '../Header/sidebar';
import LoginScreen from '../login/login_screen';
import Dashboard from '../component/dashboard_cards';
import Reservation from '../Item/reservation';
import FoodGallery from '../Item/food_gallery';
import CategoryList from '../Item/category_list';
import TableList from '../tables/table_list';
import Order from '../tables/order';
import AddNewItem from '../Item/add_new_item';
import AddPrice from '../Item/add_new_price';
import History from '../history/history.js';
import StaffList from '../staff/staff_list';
import AccountSetting from '../staff/account_setting';
import Promotion from '../promotion/promotion';
import ThisMonth from '../promotion/this_month';
import ComingMonth from '../promotion/coming_month';

const MainRoute = () => {

    return (
        <div className="bg-dark vh-100" style={{ fontFamily: 'Quicksand' }}>
            {window.location.pathname === '/Login' ? null : <div><Sidebar /> </div>}
            {window.location.pathname === '/Login' ? null : <div><Navbar /> </div>}
            <Switch>
                <Route path='/login' component={LoginScreen} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/food_gallery' component={FoodGallery} />
                <Route path='/reservation' component={Reservation} />
                <Route path='/category_list' component={CategoryList} />
                <Route path='/table_list' component={TableList} />
                <Route path='/order' component={Order} />
                <Route path='/add_new_item' component={AddNewItem} />
                <Route path='/add_new_price' component={AddPrice} />
                <Route path='/history' component={History} />
                <Route path='/staff_list' component={StaffList} />
                <Route path='/account_setting' component={AccountSetting} />
                <Route path='/promotion' component={Promotion} />
                <Route path='/this_month' component={ThisMonth} />
                <Route path='/coming_month' component={ComingMonth} />

                <Redirect to='/Home' />
            </Switch>

        </div>


    )
}
export default MainRoute;