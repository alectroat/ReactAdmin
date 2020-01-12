import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { UIDesign, NavBar } from '../_helpers/UI/layout';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

import './registerstyle.css';

import { API_URL } from '../_config';

class RegisterSave extends React.Component {
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
                headerName: "First Name", field: "FirstName"
            }, {
                headerName: "Last Name", field: "LastName"
            }, {
                headerName: "User Name", field: "UserName"
            }],
            rowData: []
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
        this.props.history.push('/register');
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.username && user.password) {
            this.props.register(user);
        }
    }

    componentDidMount() {
        fetch(API_URL.ALLREGISTERDATA)
            .then(res => res.json())
            .then((data) => {
                this.setState({ rowData: data.Data });
            })
            .catch(console.log)
    }

    render() {
        const { registering } = this.props;
        const { user, submitted } = this.state;
        return (
            <div>
                <UIDesign></UIDesign>
                <div className="main">
                    <NavBar user={user}></NavBar>
                    <div className="innerContent">
                        <div className="col-md-6 col-md-offset-3">
                            <div align="right" style={{ width: '600px' }}>
                                <button onClick={() => this.renderToHome()} className="btn btn-primary btnClass">Add New</button>
                            </div>
                            <div className="ag-theme-balham" style={{ height: '500px', width: '600px', marginTop: '5px' }}>
                                <AgGridReact
                                    columnDefs={this.state.columnDefs}
                                    rowData={this.state.rowData}>
                                </AgGridReact>
                            </div>
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

const connectedRegisterSave = connect(mapState, actionCreators)(RegisterSave);
export { connectedRegisterSave as RegisterSave };