import { Component } from 'react';
import { withRouter } from 'react-router-dom'
import template from './header.template';
import { ProductHTTPService as ProductService } from 'app/services/product/product-http.service'

class HeaderToWrap extends Component {
    constructor() {
        super();
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    /**
     * Handle search box form submition
     * 
     * @param {Event} event 
     * @memberof HeaderToWrap
     */
    handleSearchSubmit(event) {
        event.preventDefault();
        const searchForm = event.target;

        /** @type {HTMLInputElement} */
        const input = searchForm.querySelector('input')
        this.props.history.push(`/products?search=${input.value}`);
    }

    render() {
        return template.bind(this)();
    }
}

export const Header = withRouter(HeaderToWrap);