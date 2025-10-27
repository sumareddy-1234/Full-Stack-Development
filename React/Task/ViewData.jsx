import React from 'react'
// import './App.css'
import Header from './Header'
import { useContext } from 'react';
import Store from './Store';
import './ViewData.css'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function ViewData() {
  const {Details,setDetails} = useContext(Store);
  const Data = Details.filter(ele=>
    ele!=null && ele.Propic!=null
  );
  console.log(Data.length)
  console.log(Data)
  return (
    <div className="body">
      <Header/>
        <div className="parent">
          {
            Data.map((ele,ind)=>{
              return(
                <Link to="/moreinfo" state={{ Info: ele }} style={{ textDecoration: 'none' }}>
                <div className="card">
                  <div className="brief">
                    <div className="Image">
                      <img src={ele.Propic} className="Img"/>
                    </div>
                    <div className="text">
                      <div className="title"> {ele.Proname} </div>
                      <div className="cost"> {ele.Proprice} </div>
                    </div>
                  </div>
                </div> 
                </Link>
              )
            })
          } 
      </div>
    </div>
  )
}

export default ViewData;
