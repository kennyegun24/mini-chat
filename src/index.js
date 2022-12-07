import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChatContextProvider } from './context/chatsContext';
import { AuthContextProvider } from './context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // WRAP APP WITH THE authContextProvider FROM CONTEXT.JS FILE
  <AuthContextProvider>
    <ChatContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChatContextProvider>
  </AuthContextProvider>
);
