import { Component } from 'react';
import template from './breadcrumb.template';

export class Breadcrumb extends Component {
    render() {
        return template.bind(this)();
    }
}