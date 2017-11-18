import React from 'react';
import style from './products.style';
import { ProductRow } from 'app/components/shared/product-row/product-row.component';

export default function () {
    return (
        <div className="products-component">
            {this.state.products.map(_product => (<ProductRow key={_product.id} product={_product} />))}
        </div>
    )
}