import React from 'react';
import style from './product-detail-info.style';

export default function () {
    return (
        <div className="product-detail-info-component">
            <p>{this.props.product.condition} - {this.props.product.sold_quantity} vendidos</p>
            <h3>
                {this.props.product.title}
                {this.props.product.free_shipping ? (<small><img className="free-shipping" src="/public/assets/ic_shipping@2x.png" alt="Envio gratis" /></small>) : undefined}
            </h3>
            <h2>{this.props.product.normalizedPrice}</h2>
            <button>Comprar</button>
        </div>
    )
}