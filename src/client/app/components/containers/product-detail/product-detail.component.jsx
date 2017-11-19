import { Component } from 'react';
import template from './product-detail.template';
import { ProductHTTPService as ProductService } from 'app/services/product/product-http.service';
import { BreadcrumbService } from 'app/services/breadcrumb/breadcrumb.service';

export class ProductDetail extends Component {
    constructor() {
        super();
        this.state = { product: {}, fetched: false };
    }

    componentDidMount() {
        this.updateStateProductDetail();
    }

    updateStateProductDetail() {
        const productId = this.props.match.params.id;
        ProductService.getProductDetail(productId).then(result => {
            this.setState((prevState, props) => {
                return { product: result.item, fetched: true }
            });
            BreadcrumbService.instance.breadcrumb = result.item.category;
        }).catch(error => {
            if (error.error === 'not_found') {
                this.setState((prevState, props) => {
                    return { product: { not_found: true }, fetched: true }
                });
            }
            console.error('Error while fetching details: ', error);
        })
    }

    render() {
        return template.bind(this)();
    }
}