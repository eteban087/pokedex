import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { AppPokedex } from './AppPokedex.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppPokedex />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
