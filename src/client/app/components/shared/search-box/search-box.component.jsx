import { Component } from 'react';
import template from './search-box.template';

export class SearchBox extends Component {
    render() {
        return template.bind(this)();
    }
}