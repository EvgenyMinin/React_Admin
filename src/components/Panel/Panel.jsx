import React from 'react';
import './Panel.scss';

const Panel = () => {
    return (
        <div className="panel">
            <div className="panel__info">
                <p> <span><i className="fas fa-user"></i></span> admin@yandex.ru</p>
                <p> <span><i className="fas fa-plus"></i></span> Добавить клиента</p>
            </div>
            <div className="panel__exit">
                <p>Выход</p>
            </div>
        </div>
    );
}
 
export default Panel;