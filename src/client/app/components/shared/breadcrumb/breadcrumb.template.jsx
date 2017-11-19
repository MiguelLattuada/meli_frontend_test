import React from 'react';
import style from './breadcrumb.style';

export default function () {
    return (
        <div className="breadcrumb-component">
            {this.state.breadcrumb.map(b_el => (<span key={b_el} className="breadcrumb-element">{b_el}</span>))}
        </div>
    )
}