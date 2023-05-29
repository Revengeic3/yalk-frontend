import {
  ChakraProvider,
  ColorModeScript,
  extendTheme,
  withDefaultColorScheme,
  withDefaultProps,
  withDefaultVariant,
} from '@chakra-ui/react';

import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import AuthServiceProvider from './context/AuthServiceContext';
import ChatServiceProvider from './context/ChatServiceContext';
import DebugServiceProvider from './context/DebugServiceContext';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

const theme = extendTheme(
  withDefaultProps({ defaultProps: { color: 'teal' } }),
  withDefaultColorScheme({ colorScheme: 'teal' }),
  withDefaultVariant({ variant: 'ghost' })
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <AuthServiceProvider>
        <ChatServiceProvider url={'ws://localhost:8080/ws'}>
          <DebugServiceProvider>
            <App />
          </DebugServiceProvider>
        </ChatServiceProvider>
      </AuthServiceProvider>
    </ChakraProvider>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
