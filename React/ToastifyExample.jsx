import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
  
  const ToastifyExample=()=>{
    const notify = () => toast.success("Wow so easy!",{position: "top-center"});

    return (
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
        
      </div>
    );
  }
export default ToastifyExample;