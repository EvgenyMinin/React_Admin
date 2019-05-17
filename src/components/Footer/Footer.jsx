import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.scss';

const Footer = ({usersCount}) => {
    return (
        <div className="footer">
            <p>Всего клиентов: {usersCount}</p>
            <p>Заблокированных пользователей: 0</p>
        </div>
    );
}
 
export default Footer;