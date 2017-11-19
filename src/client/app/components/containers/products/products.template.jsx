import React from 'react';
import style from './products.style';
import { ProductRow } from 'app/components/shared/product-row/product-row.component';

export default function () {
    return (
        <div className="products-component">
            {this.state.fetched && (!this.state.products || !this.state.products.length) ? (<h2>No se han encontrado resultados</h2>) : undefined}
            {this.state.products.map(_product => (<ProductRow key={_product.id} product={_product} />))}
        </div>
    )
}