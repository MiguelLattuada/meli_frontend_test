import React from 'react';
import style from './search-box.style.scss';

export default function () {
    return (
        <form className="seach-box-component" onSubmit={this.props.onSubmit}>
            <input type="text" className="search-box-input" placeholder={this.props.placeholder} />
            <button className="search-box-icon-button" type="submit">
                <img src="/public/assets/ic_Search@2x.png" alt="Buscar producto" />
            </button>
        </form>
    )
}