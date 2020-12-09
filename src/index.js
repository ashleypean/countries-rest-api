import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ContextWrapper from './utils/ContextWrapper'

ReactDOM.render(
  <React.StrictMode>
    {/* Wrapper around App component to determine/toggle dark mode */}
    <ContextWrapper>
      <App />
    </ContextWrapper>  
  </React.StrictMode>,
  document.getElementById('root')
);

