// ********************
//	Johan's Portfolio
//	Copyright © 2022
// ********************

import React from 'react';
import ReactDOM from 'react-dom';
import App from '../javascript/app';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});
