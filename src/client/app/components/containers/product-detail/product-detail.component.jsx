import { Component } from 'react';
import template from './product-detail.template';
import { ProductHTTPService as ProductService } from 'app/services/product/product-http.service';
import { BreadcrumbService } from 'app/services/breadcrumb/breadcrumb.service';

export class ProductDetail extends Component {
    render() {
        return template.bind(this)();
    }
}