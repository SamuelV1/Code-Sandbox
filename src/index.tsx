import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components'
import App from './App';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
  html, body, #app, #app>div {
  height: 100%
}

`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
