import React from 'react'
import Login from './login';
import PostUserData from '../network/loginFetcher'

class LoginScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user_name: '',
            password: '',
            pwdView: false
        }
    }

    handleInputChange = StateData => this.setState(StateData) 
    handlePwdView = () => { this.setState({ pwdView: !this.state.pwdView }) }
    handleClickLog = (e) => {
        e.preventDefault()
        let userData = { user_name: this.state.user_name, password: this.state.password }
        PostUserData(userData, (error, data) => {

            if (error) console.log(error)
            if (data.message === "logSuccess") {
                window.location.href = "/Home"
            }
        })

    }


    render() {

        return (<div>
            <Login
                _handleClick={this.handleClickLog}
                handleInputChange={this.handleInputChange}
                handlePwdView={this.handlePwdView}
                pwdView={this.state.pwdView}
            />
        </div>

        )
    }

}
export default LoginScreen;