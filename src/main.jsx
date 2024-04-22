import React from 'react'

import ReactDOM from 'react-dom/client'

import './index.scss'

import { lazy } from 'react'

const App = lazy(() => import('./App.jsx'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)