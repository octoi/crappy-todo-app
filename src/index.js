import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ChakraWrap from './components/ChakraWrap';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <ChakraWrap>
      <App />
    </ChakraWrap>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
