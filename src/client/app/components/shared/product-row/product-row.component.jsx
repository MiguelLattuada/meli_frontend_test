import { Component } from 'react';
import template from './product-row.template';

export class ProductRow extends Component {
    render() {
        return template.bind(this)();
    }
}