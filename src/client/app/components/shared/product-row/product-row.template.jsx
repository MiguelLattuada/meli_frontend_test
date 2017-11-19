import React from 'react';
import style from './product-row.style';
import { Link } from 'react-router-dom';

export default function () {
    return (
        <Link to={`items/${this.props.product.id}`} className="product-row-component">
            <div className="product-row-product-image">
                <img src={this.props.product.picture} alt={this.props.product.title} />
            </div>
            <div className="product-row-product-content">
                <h3>
                    {this.props.product.normalizedPrice}
                    {this.props.product.free_shipping ? (<small><img className="free-shipping" src="/public/assets/ic_shipping@2x.png" alt="Envio gratis" /></small>) : undefined}
                </h3>
                <p>{this.props.product.title}</p>
            </div>
            <div className="product-row-product-place">
                <span></span>
            </div>
        </Link>
    )
}