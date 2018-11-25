import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

let mini = false

if(document.body.offsetWidth < 800 || document.body.offsetHeight < 750) {
    document.getElementById('root').classList.add('single-line')
    mini = true
}

ReactDOM.render(
    <App mini={mini} />,
    document.getElementById('root')
)

serviceWorker.register();
