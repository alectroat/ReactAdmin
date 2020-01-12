import React from 'react';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

import { FormTextControl, FormPasswordControl, FormSubmitButton } from '../_forms';

import './loginstyle.css'; 

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false
        };
		//this.props.history.push('/register');
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
			<div className="container">
				<div className="d-flex justify-content-center h-1000 pad10">
					<div className="card">
						<div className="card-header">
							<h3>Sign In</h3>
						</div>
						<div className="card-body">
							<form name="form" onSubmit={this.handleSubmit}>  
								<div className="input-group form-group loginForm">
									<div className="input-group-prepend">
										<span className="input-group-text"><i className="fas fa-user"></i></span>
									</div>
									<FormTextControl submitted={submitted} Label="Username" Name="username" Value={username}
										onChange={this.handleChange} errMsg="">
									</FormTextControl>						
								</div>
								<div className="input-group form-group loginForm">
									<div className="input-group-prepend">
										<span className="input-group-text"><i className="fas fa-key"></i></span>
									</div>
									<FormPasswordControl submitted={submitted} Label="Password" Name="password" Value={password}
										onChange={this.handleChange} errMsg="">
									</FormPasswordControl>									
								</div>
								<div className="row align-items-center remember">
									<input type="checkbox" className="chk"/>Remember Me
								</div>
								<div className="form-group" align="right">
									<FormSubmitButton flag={loggingIn} linkTo="/register" Label1="Login" Label2="Register"></FormSubmitButton>
								</div>
							</form>
						</div>
						<div className="card-footer">
							<div className="d-flex justify-content-center">
								<a href="#">Forgot your password?</a>
							</div>
						</div>
					</div>
				</div>
			</div>
        );
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };