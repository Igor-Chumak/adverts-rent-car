import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize';
import { App } from 'components';
import { Provider as ReduxProvider } from 'react-redux';
import { persistor, store } from 'store/store';
import { PersistGate } from 'redux-persist/integration/react';
import DarkThemeProvider from 'components/DarkThemeProvider/DarkThemeProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <DarkThemeProvider>
            <App />
          </DarkThemeProvider>
        </PersistGate>
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>
);
