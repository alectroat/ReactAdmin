import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../_actions';
import { UIDesign, NavBar } from '../_helpers/UI/layout';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    viewLayout() {
        return;
    }

    render() {
        const { user, users } = this.props;
        return (
            <div>
                <UIDesign></UIDesign>
                <div className="main">
                    <NavBar user={user}></NavBar>
                    <div className="innerContent">
                        <h1>Hi {user.firstName}!</h1>
                        <p>You're logged in with React!!</p>
                        <h3>All registered users:</h3>
                        {users.loading && <em>Loading users...</em>}
                        {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                        {users.items &&
                            <ul>
                                {users.items.map((user, index) =>
                                    <li key={user.id}>
                                        {user.firstName + ' ' + user.lastName}
                                        {
                                            user.deleting ? <em> - Deleting...</em>
                                                : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                                    : <span> - <a onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                        }
                                    </li>
                                )}
                            </ul>
                        }
                    </div>
                </div>
            </div>            
        );
    }
}

function mapState(state) {    
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };