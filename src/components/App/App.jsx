import React, { Component } from 'react';
import Panel from './../Panel';
import ItemStatusFilter from '../ItemStatusFilter';
import Table from './../Table';
import Footer from './../Footer';
import { createUsers, getInitialUsers } from '../../helpers/users';
import './App.scss';

class App extends Component {

    state = {
        users: getInitialUsers(),
    }

    render() {
        const { users } = this.state;
        return (
            <div className="container">
                <Panel />
                <ItemStatusFilter />
                <Table users={users}/>
                <Footer />
            </div>
        );
    }
    
}
 
export default App;