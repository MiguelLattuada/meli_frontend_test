import React from 'react';
import style from './header.style';
import { SearchBox } from '../search-box/search-box.component';

export default function () {
    return (
        <div className="header-component">
            <div className="header-content">
                <div className="header-icon">
                    <img src="/public/assets/Logo_ML@2x.png" alt="Mercado Libre Test" />
                </div>
                <div className="header-search-box">
                    <SearchBox placeholder="Nunca dejes de buscar" onSubmit={this.handleSearchSubmit} />
                </div>
            </div>
        </div>
    )
}