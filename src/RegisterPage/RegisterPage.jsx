import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { FormTextControl, FormPasswordControl, FormSubmitButton } from '../_forms';
import { UIDesign, NavBar } from '../_helpers/UI/layout';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import './registerstyle.css'; 


class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false,
            columnDefs: [{
                headerName: "Make", field: "make"
            }, {
                headerName: "Model", field: "model"
            }, {
                headerName: "Price", field: "price"
            }],
            rowData: [{
                make: "Toyota", model: "Celica", price: 35000
            }, {
                make: "Ford", model: "Mondeo", price: 32000
            }, {
                make: "Porsche", model: "Boxter", price: 72000
            }]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }    

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    renderToHome() {
        this.props.history.push('/register/list');
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.username && user.password) {
            this.props.register(user);
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        return (
            <div>
                <UIDesign></UIDesign>
                <div className="main">
                    <NavBar user={user}></NavBar>
                    <div className="innerContent">
                        <div className="col-md-6 col-md-offset-3">
                            <h2>Register</h2>
                            <br/>
                            <form className="formClass" name="form" onSubmit={this.handleSubmit}>
                                <FormTextControl submitted={submitted} Label="First Name" Name="firstName" Value={user.firstName}
                                    onChange={this.handleChange} errMsg="First Name is required"></FormTextControl>

                                <FormTextControl submitted={submitted} Label="Last Name" Name="lastName" Value={user.lastName}
                                    onChange={this.handleChange} errMsg="Last Name is required"></FormTextControl>

                                <FormTextControl submitted={submitted} Label="Username" Name="username" Value={user.username}
                                    onChange={this.handleChange} errMsg="Username is required"></FormTextControl>

                                <FormPasswordControl submitted={submitted} Label="Password" Name="password" Value={user.password}
                                    onChange={this.handleChange} errMsg="Password is required"></FormPasswordControl>
                                <div className="form-group">
                                    <FormSubmitButton flag={registering} linkTo="/login" Label1="Save" Label2="Cancel"></FormSubmitButton>
                                    &nbsp;<button onClick={() => this.renderToHome()} className="btn btn-primary btnClass">Back</button>
                                </div>                                
                            </form>                            
                        </div>
                    </div>
                </div>
            </div>            
        );
    }
}

function mapState(state) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };