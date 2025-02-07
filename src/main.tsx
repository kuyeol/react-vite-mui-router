
import App from './App'
import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { AppThemeProvider } from './AppThemeProvider';
import { Provider } from 'react-redux';
import apistore from './api/apistore';


const root = ReactDOMClient.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={apistore}>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
      </Provider>
  </React.StrictMode>
);
