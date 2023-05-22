import React from 'react'
import ReactDOM from 'react-dom/client'
// Bootstrap Related
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

// Alternative Imports
import "/node_modules/flag-icons/css/flag-icons.min.css";
import './Components/i18next.jsx';

import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
