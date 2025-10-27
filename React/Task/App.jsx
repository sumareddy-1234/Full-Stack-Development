import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AddData from './AddData.jsx';
import ViewData from './ViewData.jsx';
import Store from './Store.jsx';
import MoreInfo from './MoreInfo.jsx';

function App() {
  const [Details, setDetails] = useState([]);

  return (
    <>
      <Store.Provider value={{Details,setDetails}}>
        <BrowserRouter className="options"> 
          <Routes>
              <Route path="/" element={<AddData/>}/>
              <Route path="/view" element={<ViewData/>}/>
              <Route path="/moreinfo" element={<MoreInfo/>}/>
          </Routes>
        </BrowserRouter> 
      </Store.Provider>
    </>
  )
}

export default App
