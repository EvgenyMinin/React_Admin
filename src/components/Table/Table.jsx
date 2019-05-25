import React, { Component } from 'react';
import ModalEditUser from '../ModalEditUser';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Table.scss';

class Table extends Component {

    state = {
        isOpenModalEditUser: false,
        currentUser: {}
    }

    toggleModalEditUser = () => {
        this.setState(prevState => ({
            isOpenModalEditUser: !prevState.isOpenModalEditUser
        }))
    }

    handleClickUser = (user) => {
        this.setState({
            currentUser: user,
            isOpenModalEditUser: true
        })
    }

    handleChange = ({currentTarget: input}) => {
        const currentUser = {...this.state.currentUser};
        currentUser[input.name] = input.value;
        console.log(currentUser);
        this.setState({
            currentUser
        })
    }

    handleSubmit = () => {
        const users = [...this.props.users];
        const userIndex = users.findIndex(u => u.id === this.state.currentUser.id);
        users[userIndex] = this.state.currentUser;
        this.setState({
            isOpenModalEditUser: false
        });
        this.props.updateUsers(users);
    }

    render() {
        const { users, onSort, sortField, order } = this.props;
        const { isOpenModalEditUser, currentUser } = this.state;
        const elements = users.map(user => {
            const isBlock = user.status === 'Заблокирован';
            let className = '';
            if (isBlock) className += ' block';
            return (
                <tr key={user.id} className={className}>
                    <td>{user.id}</td>
                    <td
                        className='table__user'
                        onClick={() => this.handleClickUser(user)}
                    >
                        {user.email}
                    </td>
                    <td>{user.status}</td>
                    <td>{user.type}</td>
                    <td>{user.subpay}</td>
                    <td>{user.balance}</td>
                </tr>
            )
        });
        return (
            <React.Fragment>
                <table className='table table-sm custom-table'>
                    <thead>
                        <tr>
                            <th onClick={() => onSort('id')}>
                                ID {sortField === 'id' && <small>{ order === 'asc' ? '↓' : '↑' }</small>}
                            </th>
                            <th onClick={() => onSort('email')}>
                                Клиент {sortField === 'email' && <small>{ order === 'asc' ? '↓' : '↑' }</small>}
                            </th>
                            <th onClick={() => onSort('status')}>
                                Статус {sortField === 'status' && <small>{ order === 'asc' ? '↓' : '↑' }</small>}
                            </th>
                            <th onClick={() => onSort('type')}>
                                Тип {sortField === 'type' && <small>{ order === 'asc' ? '↓' : '↑' }</small>}
                            </th> 
                            <th onClick={() => onSort('subpay')}>
                                Абон. плата {sortField === 'subpay' && <small>{ order === 'asc' ? '↓' : '↑' }</small>}
                            </th>
                            <th onClick={() => onSort('balance')}>
                                Баланс {sortField === 'balance' && <small>{ order === 'asc' ? '↓' : '↑' }</small>}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {elements}
                    </tbody>
                </table>
                <ModalEditUser
                    currentUser={currentUser}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    isOpenModalEditUser={isOpenModalEditUser}
                    toggleModalEditUser={this.toggleModalEditUser}
                    changeStatus={this.handleChangeStatus}
                />
            </React.Fragment>
        );

    }
}
 
export default Table;