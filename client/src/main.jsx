import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { ArbitrumSepolia } from "@thirdweb-dev/chains";
import 'react-toastify/dist/ReactToastify.css'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { StateContextProvider } from './context';
import App from './App';
import './index.css';
import './app.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThirdwebProvider
    activeChain={ArbitrumSepolia}
    clientId="05df97614128323f67280efed6e3613a" // You can get a client id from dashboard settings

  >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
)