import React from 'react';
import style from './product-detail.style';
import { ProductDetailInfo } from 'app/components/shared/product-detail-info/product-detail-info.component';

export default function () {
    if (this.state.product.not_found && this.state.fetched) {
        return (
            <div className="product-detail-component">
                <h2>No se ha encontrado el producto</h2>`
            </div>
        );
    }
    else if (this.state.product && this.state.fetched) {
        return (
            <div className="product-detail-component">
                <div className="product-detail-image">
                    <img src={this.state.product.picture} alt={this.state.product.title} />
                </div>
                <div className="product-detail-info">
                    <ProductDetailInfo product={this.state.product} />
                </div>
                <div className="product-detail-description">
                    <h3>Descripción del producto</h3>
                    <div dangerouslySetInnerHTML={{ __html: this.state.product.description }}></div>
                </div>
            </div>
        );
    } else {
        // TODO: replace to a loading state
        return <span></span>;
    }
}