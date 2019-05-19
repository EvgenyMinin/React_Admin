import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.scss';

const Footer = ({usersCount, blockUsersCount}) => {
    return (
        <div className="footer">
            <p>Всего клиентов: {usersCount}</p>
            <p>Заблокированных пользователей: {blockUsersCount}</p>
        </div>
    );
}
 
export default Footer;