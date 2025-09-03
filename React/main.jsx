import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MyComponent from './MyComponent'
import FunctionComponent from './FunctionComponent'
import MyFunction from './MyFunction'
import Form from './Form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />
    <MyComponent />
    <FunctionComponent />
    <MyFunction />*/}
    <Form/>
  </StrictMode>,
)
