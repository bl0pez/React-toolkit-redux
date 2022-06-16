import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { Provider } from 'react-redux';
import { store } from './store';
import { PokemonApp } from './PokemonApp';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './themes/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
        {/* <PokemonApp /> */}
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
