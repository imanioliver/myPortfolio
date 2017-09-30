import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import BaseLayout from './components/Layout';




ReactDOM.render(
    <BrowserRouter>

        <BaseLayout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/cv" component={Portfolio}/>
            </Switch>
        </BaseLayout>
    </BrowserRouter>



    , document.getElementById('root'));
registerServiceWorker();
