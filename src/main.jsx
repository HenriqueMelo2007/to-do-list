import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'

import { ProvedorContexto } from './context/context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProvedorContexto>
      <App />
    </ProvedorContexto>
  </React.StrictMode>,
)
