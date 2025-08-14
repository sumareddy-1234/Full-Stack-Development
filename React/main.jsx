import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import MyComponent from './MyComponent'
import FunctionComponent from './FunctionComponent'
import MyFunction from './MyFunction'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyComponent />
    <FunctionComponent />
    <MyFunction />
  </StrictMode>,
)
