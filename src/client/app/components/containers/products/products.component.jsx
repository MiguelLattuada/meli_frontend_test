import { Component } from 'react';
import template from './products.template';
import { ProductHTTPService as ProductService } from 'app/services/product/product-http.service'

export class Products extends Component {
    constructor() {
        super();
        this.state = { products: [] };
    }

    componentDidMount() {
        this.updateStateProductList();
    }

    componentWillReceiveProps(props, context) {
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
                return { products: result }
            });
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