import React, { Component } from 'react';
import Panel from './../Panel';
import ItemStatusFilter from '../ItemStatusFilter';
import Table from './../Table';
import Footer from './../Footer';
import { createUser, getInitialUsers, saveUsersToLS } from '../../helpers/users';
import _ from 'lodash';
import './App.scss';

class App extends Component {

    state = {
        users: getInitialUsers(),
        sortField: 'id',
        order: 'asc',
        selectFilter: 'all'
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

    handleChangeFilter = (selectFilter) => {
        this.setState({
            selectFilter
        });
    }

    handleCreateNewUser = (email, status, type, subpay, balance, phone, password, business) => {
        const newUser = createUser(email, status, type, subpay, balance, phone, password, business);
        const users = [...this.state.users, newUser];
        this.setState({
            users
        });
        saveUsersToLS(users);
    }

    getFilteredUsers = (users, selectFilter) => {
        switch(selectFilter) {
            case 'all':
                return users;
            case 'block':
                return users.filter(user => user.status === "Заблокирован");
            case 'active':
                return users.filter(user => user.status === "Активен");
            default:
                return users;
        }
    }

    handleUpdateUsers = (users) => {
        this.setState({
            users
        });
        saveUsersToLS(users);
    }

    render() {
        const { users, sortField, order, selectFilter } = this.state;
        const blockUsersCount = users.filter(user => user.status === "Заблокирован").length;
        const usersCount = users.length;
        const visibleUsers = this.getFilteredUsers(users, selectFilter);
        return (
            <div className="container">
                <Panel
                    users={users}
                    createNewUser={this.handleCreateNewUser} 
                />
                <ItemStatusFilter
                    selectedFilter={selectFilter}
                    changeFilter={this.handleChangeFilter}
                />
                <Table
                    users={visibleUsers}
                    updateUsers={this.handleUpdateUsers}
                    onSort={this.handleSort}
                    sortField={sortField}
                    order={order}
                />
                <Footer
                    usersCount={usersCount}
                    blockUsersCount={blockUsersCount}
                />
            </div>
        );
    }
    
}
 
export default App;