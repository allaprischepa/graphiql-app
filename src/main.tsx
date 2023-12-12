import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './styles/index.scss';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import LangState from './languages/LangState';
import initialState from './languages/initialState';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <LangState initialState={initialState}>
      <App />
    </LangState>
  </ErrorBoundary>
);
