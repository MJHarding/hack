import React, { Component } from 'react';
import '../App.css';

class currentRegisteredUsers extends Component {

    state = { users: [] }

    componentDidMount() {
      fetch('/users')
        .then(res => res.json())
        .then(users => this.setState({ users }));
    }

    render() {
        return (
            <div>
            <h1>Current Registered Users Users</h1>
            {this.state.users.map(user =>
              <div key={user.id}>{user.username}</div>
            )}
             </div>
        );

    }


}

export default currentRegisteredUsers;