import React from 'react';
import { render } from 'react-dom'
import {HashRouter,BrowserRouter,Route} from 'react-router-dom';

import App from './App';

render(
    <HashRouter>
        <App />
        {/* <Route component={App}/> */}
    </HashRouter>
    ,
    document.getElementById('app')
)
