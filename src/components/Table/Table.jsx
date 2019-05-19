import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Table.scss';

const Table = ({ users, onSort, sortField, order }) => {
    const elements = users.map(user => {
        const isBlock = user.isBlock;
        let className = '';
        if (isBlock) className += ' block';
        return (
            <tr key={user.id} className={className}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.isBlock ? 'Заблокирован' : 'Активен'}</td>
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
    );
}
 
export default Table;