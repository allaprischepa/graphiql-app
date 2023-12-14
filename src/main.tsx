import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './styles/index.scss';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { Provider } from 'react-redux';
import { store } from './state/store';

import LangState from './languages/LangState';
import initialState from './languages/initialState';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <Provider store={store}>
      <LangState initialState={initialState}>
        <App />
      </LangState>
    </Provider>
  </ErrorBoundary>
);
