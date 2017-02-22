import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';

// styles
import './css/style.css';

// Components
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

const Root = () => {
    return (
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={StorePicker}></Match>
                <Match pattern="/store/:storeId" component={App}></Match>
                <Miss component={NotFound}></Miss>
            </div>
        </BrowserRouter>
    )
}

render(<Root />, document.getElementById('main'));
