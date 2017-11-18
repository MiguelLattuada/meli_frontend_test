import React from 'react';
import { Switch, Route } from 'react-router-dom';

import style from './app.style';

import { Header } from './components/shared/header/header.component';
import { Breadcrumb } from './components/shared/breadcrumb/breadcrumb.component';

import { Products } from './components/containers/products/products.component';

export default function () {
    return (
        <div className="app-component">
            <Header />
            <Breadcrumb />
            <div className="main-content">
                <Switch>
                    {/* <Route exact path='/' component={} /> */}
                    <Route path='/products' component={Products} />
                    {/* <Route path='/items/:id' component={} /> */}
                </Switch>
            </div>
        </div>
    );
}