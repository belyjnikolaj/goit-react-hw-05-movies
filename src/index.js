import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/app/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Context from 'context/Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/goit-react-hw-05-movies">
    <Context>
      <App />
    </Context>
  </BrowserRouter>
);
