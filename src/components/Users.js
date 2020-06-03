import React, {Component} from 'react';

class Users extends Component {
  state = {
    users: []
  }
 
  componentDidMount() {
    //console.log('Users mount')
    fetch(this.props['data-url'])
    .then(res => res.json())
    .then(users => this.setState({users: users}));
  }

  render() {
    return <div className="container">
      <h1>List of Users</h1>
      <table
          className="table-dark table-striped table-condensed table table-bordered table-hover">
        <tbody>
        {this.state.users.map(user =>
            <tr key={user.id}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
            </tr>
        )}
        </tbody>
      </table>
    </div>
  }
}

export default Users;