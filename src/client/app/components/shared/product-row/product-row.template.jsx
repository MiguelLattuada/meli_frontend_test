import React from 'react';
import style from './product-row.style';

export default function () {
    return (
        <div className="product-row-component">
            <div className="product-row-product-image">
                <img src={this.props.product.thumbnail} alt={this.props.product.title} />
            </div>
            <div className="product-row-product-content">
                <h3>{this.props.product.currency}{this.props.product.price}</h3>
                <p>{this.props.product.title}</p>
            </div>
            <div className="product-row-product-place">
                <span>Montevideo</span>
            </div>
        </div>
    )
}