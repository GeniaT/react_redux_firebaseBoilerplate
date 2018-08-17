import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { firebase } from './utils/firebase';
import AppRoutes from './routes/AppRoutes';
import store from './utils/store';
import './styles/index.scss';

const AppProvider = (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
)

const renderApp = () => {
  ReactDOM.render(AppProvider, document.getElementById('app'));
}

renderApp();
