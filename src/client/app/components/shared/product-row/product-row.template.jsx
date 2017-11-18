import React from 'react';
import style from './product-row.style';

export default function () {
    return (
        <div className="product-row-component">
            <div className="product-row-product-image">
                <img src={this.props.product.picture} alt={this.props.product.title} />
            </div>
            <div className="product-row-product-content">
                <h3>{this.props.product.normalizedPrice}</h3>
                <p>{this.props.product.title}</p>
            </div>
            <div className="product-row-product-place">
                <span></span>
            </div>
        </div>
    )
}