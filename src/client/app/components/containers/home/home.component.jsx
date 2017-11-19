import { Component } from 'react';
import template from './home.template';
import { ProductHTTPService as ProductService } from 'app/services/product/product-http.service';
import { BreadcrumbService } from 'app/services/breadcrumb/breadcrumb.service';

export class Home extends Component {
    componentWillMount() {
        // Set breadcrumb to empty
        BreadcrumbService.instance.breadcrumb = [];
    }

    render() {
        return template.bind(this);
    }
}