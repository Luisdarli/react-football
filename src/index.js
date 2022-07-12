import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";

//styles
import './index.css';

//routes
import { RoutesApp } from './routes';

ReactDOM.render(
  <React.StrictMode>
    <RoutesApp />
  </React.StrictMode>,
  document.getElementById('root')
);
