import { Component } from 'react';
import template from './product-detail-info.template';

export class ProductDetailInfo extends Component {
    render() {
        return template.bind(this)();
    }
}