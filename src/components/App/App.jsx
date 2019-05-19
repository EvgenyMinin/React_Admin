import React, { Component } from 'react';
import Panel from './../Panel';
import ItemStatusFilter from '../ItemStatusFilter';
import Table from './../Table';
import Footer from './../Footer';
import { createUser, getInitialUsers } from '../../helpers/users';
import _ from 'lodash';
import './App.scss';

class App extends Component {

    state = {
        users: getInitialUsers(),
        sortField: 'id',
        order: 'asc'
    }

    componentDidMount() {
        this.setState({
            users: _.orderBy(this.state.users, this.state.sortField, this.state.order)
        })
    }

    handleSort = sortField => {
        const users = {...this.state.users};
        const sortType = this.state.order === 'asc' ? 'desc' : 'asc';
        const orderedUsers = _.orderBy(users, sortField, sortType);

        this.setState({
            users: orderedUsers,
            order: sortType,
            sortField
        })
    }

    handleCreateNewUser = (email, status, phone, password, business) => {
        const newUser = createUser(email, status, phone, password, business);
        const users = [...this.state.users, newUser]
        this.setState({
            users
        })
    }

    render() {
        const { users, sortField, order } = this.state;
        const usersCount = users.length;
        return (
            <div className="container">
                <Panel
                    users={users}
                    createNewUser={this.handleCreateNewUser} 
                />
                <ItemStatusFilter />
                <Table
                    users={users}
                    onSort={this.handleSort}
                    sortField={sortField}
                    order={order}
                />
                <Footer usersCount={usersCount}/>
            </div>
        );
    }
    
}
 
export default App;