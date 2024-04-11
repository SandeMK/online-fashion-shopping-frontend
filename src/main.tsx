import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './css/style.css';
import './css/satoshi.css';
import 'jsvectormap/dist/css/jsvectormap.css';
import 'flatpickr/dist/flatpickr.min.css';
import { AppContextProvider } from './context';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Toaster } from 'react-hot-toast';
config.autoAddCss = false

export default function MyApp({ Component, pageProps }) {
return <Component {...pageProps} />
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <AppContextProvider>
        <App />
        <Toaster />
      </AppContextProvider>
    </Router>
  </React.StrictMode>,
);
