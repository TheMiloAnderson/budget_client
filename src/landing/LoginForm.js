import React, {Component} from 'react';
import superagent from 'superagent';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
        this.changeUserName = this.changeUserName.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.submit = this.submit.bind(this);
    }

    changeUserName(event) {
        this.setState({
            userName: event.target.value
        })
    }

    changePassword(event) {
        this.setState({
            password: event.target.value
        })
    }

    submit(event) {
        event.preventDefault();
        const url = 'http://localhost:8000/api/v1/login';
        superagent.post(url)
            .send({
                username: this.state.userName,
                password: this.state.password
            }).then((res) => {
                this.props.onLogin(res.body.token)
            })
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <label>
                    User Name
                    <input type="text" 
                    value={this.state.userName}
                    onChange={this.changeUserName}/>
                </label>
                <label>
                    Password
                    <input type="password" 
                    value={this.state.password}
                    onChange={this.changePassword}/>
                </label>
                <button>Submit</button>
            </form>
        )
    }
}

export default LoginForm