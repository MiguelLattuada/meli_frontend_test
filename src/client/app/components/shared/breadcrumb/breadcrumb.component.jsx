import { Component } from 'react';
import template from './breadcrumb.template';
import { BreadcrumbService } from 'app/services/breadcrumb/breadcrumb.service';

export class Breadcrumb extends Component {

    constructor() {
        super();
        this.state = { breadcrumb: [] };
        BreadcrumbService.instance.subscribe(this.updateBreadcrumbState.bind(this));
    }

    /**
     * Update breadcrumb
     * 
     * @param {Array<string>} breadcrumb 
     * @memberof Breadcrumb
     */
    updateBreadcrumbState(breadcrumb) {
        this.setState((prevState, props) => {
            return { breadcrumb: breadcrumb }
        });
    }

    componentWillUnmount() {
        BreadcrumbService.instance.dispose();
    }

    render() {
        return template.bind(this)();
    }
}