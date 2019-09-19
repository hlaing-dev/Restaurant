import React, { Component } from 'react'
import KumoInputBox from '../elements/kumoInputBox';
import KumoButton from '../elements/kumoButton';
import axios from 'axios';

export default class AddItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            promotion: [],
            promo_name: '',
            promo_type: '',
            amount: '',
            prod_id: '',
            start_date: '',
            end_date: ''
        }
    }

    // componentDidMount() {
    //     axios.get('http://restaurant.com:5005/discount/products')
    //         .then(res =>
    //             res.json()
    //         )
    //         .then(
    //             data => this.setState({ promotions: data }),
    //             error => this.setState({ error })
    //         )
    // }

    changeHandlerName = (e) => {
        this.setState({
            promo_name: e.target.value
        })
    }

    changeHandlerType = (e) => {
        this.setState({
            promo_type: e.target.value
        })
    }

    changeHandlerAmount = (e) => {
        this.setState({
            amount: e.target.value
        })
    }

    changeHandlerProduct = (e) => {
        this.setState({
            prod_id: e.target.value
        })
    }

    changeHandlerStart = (e) => {
        this.setState({
            start_date: e.target.value
        })
    }

    changeHandlerEnd = (e) => {
        this.setState({
            end_date: e.target.value
        })
    }

    //Add Promotion
    handleSubmit = () => {
        
        console.log(this.state)
        axios
            .post('http://restaurant.com:5005/add/discount/products',
                {
                    promo_name: this.state.promo_name,
                    promo_type: this.state.promo_type,
                    amount: this.state.amount,
                    prod_id: this.state.prod_id,
                    start_date: this.state.start_date,
                    end_date: this.state.end_date
                })
            .then(response => {
                console.log(response)
            })
            .then(error => {
                console.log(error)
            })
    }

    render() {
        const { promo_name, promo_type, amount, prod_id, start_date, end_date } = this.state;
        return (
            <div className="container-fluid bg-dark p-3">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-4 bg-light p-3">
                        <h3 style={{ textAlign: 'center' }}>Create Promotion</h3>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <label>Promotion Name</label>
                                <KumoInputBox type="text" name="promo_name" onChange={this.changeHandlerName} value={promo_name} placeholder="Enter Promotion Name" />

                                <label>Promotion Type</label>
                                <KumoInputBox type="text" name="promo_type" onChange={this.changeHandlerType} value={promo_type} placeholder="Enter Promotion Type" />

                                <label>Promotion Amount</label>
                                <KumoInputBox text="text" name="amount" onChange={this.changeHandlerAmount} value={amount} placeholder="Enter Promotion Amount" />

                                <label>Promotion Start Date</label>
                                <KumoInputBox type="date" name="start_date" onChange={this.changeHandlerStart} value={start_date} />

                                <label>Promotion End Date</label>
                                <KumoInputBox type="date" name="end_date" onChange={this.changeHandlerEnd} value={end_date} />

                                <label>Product Name</label>
                                <KumoInputBox type="text" name="prod_id" onChange={this.changeHandlerProduct} value={prod_id} placeholder="Enter Product Name" />

                                <KumoButton type="submit" className="mt-4" text="Create" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }

}