import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import styles from './app.style';
import template from './app.template';

class App extends React.Component {
    render() {
        return template.bind(this)()
    }
}

render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));
