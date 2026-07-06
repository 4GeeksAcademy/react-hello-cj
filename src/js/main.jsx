import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';

let seconds = 0;
const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
    root.render(<Home seconds={seconds} />);
    seconds++;
}, 1000);