import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Map from './components/Map'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Map />, document.getElementById('root'));
registerServiceWorker();
