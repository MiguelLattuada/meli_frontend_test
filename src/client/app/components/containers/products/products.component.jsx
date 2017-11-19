import { Component } from 'react';
import template from './products.template';
import { ProductHTTPService as ProductService } from 'app/services/product/product-http.service';
import { BreadcrumbService } from 'app/services/breadcrumb/breadcrumb.service';

export class Products extends Component {
    constructor() {
        super();
        this.state = { products: [] };
    }

    componentDidMount() {
        this.updateStateProductList();
    }

    componentWillReceiveProps(props, context) {
        // TODO: Check for location change before update product list
        this.updateStateProductList();
    }

    /**
     * Update state products list
     * 
     * @memberof Products
     */
    updateStateProductList() {
        ProductService.getProducts(this.getSearchFromLocation()).then(result => {

            this.setState((prevState, props) => {
                return { products: result.items };
            });

            BreadcrumbService.instance.breadcrumb = result.categories;
        }).catch(error => {
            console.error('Error while fetching results: ', error);
        });
    }

    /**
     * Get search value of current location
     * 
     * @returns 
     * @memberof Products
     */
    getSearchFromLocation() {
        const search = this.props.history.location.search,
            splitted = search.split(/=|\?|&/);
        let index = splitted.findIndex(element => element === 'search')
        return splitted[++index];
    }

    render() {
        return template.bind(this)();
    }
}