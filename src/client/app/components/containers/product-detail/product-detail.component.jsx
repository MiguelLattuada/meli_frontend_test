import { Component } from 'react';
import template from './product-detail.template';
import { ProductHTTPService as ProductService } from 'app/services/product/product-http.service';
import { BreadcrumbService } from 'app/services/breadcrumb/breadcrumb.service';

export class ProductDetail extends Component {
    constructor() {
        super();
        this.state = { product: {} };
    }

    componentDidMount() {
        this.updateStateProductDetail();
    }

    updateStateProductDetail() {
        const productId = this.props.match.params.id;
        ProductService.getProductDetail(productId).then(result => {
            this.setState((prevState, props) => {
                return { product: result.item }
            });
            BreadcrumbService.instance.breadcrumb = result.item.category;
            console.log(result);
        }).catch(error => {
            console.error('Error while fetching details: ', error);
        })
    }

    render() {
        return template.bind(this)();
    }
}