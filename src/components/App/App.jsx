import React, { Component } from 'react';
import Panel from './../Panel';
import ItemStatusFilter from '../ItemStatusFilter';
import Table from './../Table';
import Footer from './../Footer';
import { createUser, getInitialUsers } from '../../helpers/users';
import './App.scss';

class App extends Component {

    state = {
        users: getInitialUsers(),
    }

    handleCreateNewUser = (email) => {
        const newUser = createUser(email);
        this.setState(({users}) => {
            const newUsers = [
                ...users,
                newUser
            ];
            return {
                users: newUsers
            }
        })
    }

    render() {
        const { users } = this.state;
        const usersCount = users.length;
        return (
            <div className="container">
                <Panel createNewUser={this.handleCreateNewUser} />
                <ItemStatusFilter />
                <Table users={users}/>
                <Footer usersCount={usersCount}/>
            </div>
        );
    }
    
}
 
export default App;