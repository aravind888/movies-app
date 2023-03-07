import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Routes';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout/layout';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import "./scss/style.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Layout>
      <React.StrictMode>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </React.StrictMode>
    </Layout>
  </Provider>
);