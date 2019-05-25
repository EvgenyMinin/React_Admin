import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ItemStatusFilter.scss';

class ItemStatusFilter extends Component {
    buttons = [
        { name: 'all', label: 'Показать всех' },
        { name: 'block', label: 'Показать только заблокированных' },
        { name: 'active', label: 'Показать только активных' },
    ];
    render() {
        const { selectedFilter, changeFilter } = this.props;
        const buttons = this.buttons.map( ({name, label}) => {
            const isActive = selectedFilter === name;
            const className = isActive ? 'active' : '';
            return (
                <button
                    key={name}
                    className={`btn custom-button ${className}`}
                    onClick={ () => changeFilter(name)}
                >
                    {label}
                </button>
            );
        });
        return (
            <div className='btn-group itemStatusFilter'>
                { buttons }
            </div>
        );
    }
    
}
 
export default ItemStatusFilter;