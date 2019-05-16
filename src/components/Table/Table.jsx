import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Table.scss';

const Table = ({ users }) => {
    const elements = users.map(user => {
        return (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.status}</td>
                <td>{user.type}</td>
                <td>{user.subpay}</td>
                <td>{user.balance}</td>
            </tr>
        )
    })
    return (
        <table className='table table-sm custom-table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Клиент</th>
                    <th>Статус</th>
                    <th>Тип</th>
                    <th>Абон. плата</th>
                    <th>Баланс</th>
                </tr>
            </thead>
            <tbody>
                {elements}
            </tbody>
        </table>
    );
}
 
export default Table;