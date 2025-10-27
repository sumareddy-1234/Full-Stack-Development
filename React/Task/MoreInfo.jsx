import React from 'react'
import './App.css'
import Header from './Header'
import Form from './Form'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './MoreInfo.css'

function MoreInfo() {
    const {state} = useLocation();
    const product = state.Info
    console.log(product);
  return (
    <div className="body">
        <Link to="/view" style={{textDecoration:'none'}}>
            <div className="back">
                &larr;&nbsp; Back
            </div>
        </Link>
        <div className="details">
            <div className="block">
                <div className="image1">
                    <img src={product.Propic} className="Img1"/>
                </div>
                <div className="name1 txt"> Name : {product.Proname} </div>
                <div className="brand1 txt"> Brand : {product.Probrand} </div>
                <div className="price1 txt"> Price : {product.Proprice} </div>
                <div className="size1 txt"> Size : {product.Prosize} </div>
                {
                product.Prodesc ? 
                <div className="desc txt"> Description : {product.Prodesc} </div>
                : <></>}
            </div>
        </div>
    </div>
  )
}

export default MoreInfo;
