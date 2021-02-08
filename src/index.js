import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './index.css';
import App from './App';
import Console from './Console';
import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.min.css';

const rootElement = document.getElementById("root");
ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/gui" component={App} />
            <Route path="/" component={Console} />
        </Switch>
    </BrowserRouter>,
    rootElement
);

serviceWorker.register();
