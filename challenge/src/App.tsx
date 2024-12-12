import React from 'react';
import Provider from './context/app-provider/provider';
import SnackbarProvider from './context/snackbar-provider/snackbar-provider';
import MainScreen from './views/main-screen'
import './App.css';

function App() {
  return (
    <Provider>
      <SnackbarProvider>
        <MainScreen />
      </SnackbarProvider>
    </Provider>
  );
}

export default App;
