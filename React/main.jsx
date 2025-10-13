import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.jsx'
import TiltyExample from './TiltyExample.jsx'
import CountUpExample from './CountupExample.jsx'
import ToastifyExample from './ToastifyExample.jsx'
import SpinnerExample from './SpinnerExample.jsx'
import ConfettiExample from './ConfettiExample.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />*/}
    <TiltyExample />
    <CountUpExample />
    <ToastifyExample />
    <SpinnerExample />
    <ConfettiExample />

  </StrictMode>
)
