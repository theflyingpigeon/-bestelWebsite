import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import App from './App';
import Producten from './components/Producten'
import Bestelijst from './components/Bestellijst'
import reportWebVitals from './reportWebVitals';


const routing = (
    <Router>
        <div>
            <Route path="/" exact component={App} />
            <Route path="/producten" exact component={Producten} />
            <Route path="/bestellijst" exact component={Bestelijst} />
            <Route path="/test" exact component={Bestelijst} />
        </div>
    </Router>
)


ReactDOM.render(
   routing,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
