import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//const h1 = React.createElement('h1', null, React.createElement('ul', null, React.createElement('li', null, 'item 1')));
// Trabajamos con JSX que es como tenemos encima con el React.createElement pero en react con el jsx lo trabaja por detras.
const h1 =<div><ul><li>Hola mundo</li></ul></div>;
createRoot(document.getElementById('root')).render(
  /*<StrictMode>
    <App />
  </StrictMode>,*/
  h1
)
