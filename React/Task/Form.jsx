import React, { useEffect } from 'react'
import './Form.css';
import { useState } from 'react';
import { useContext } from 'react';
import Store from './Store';

function Form() {
  const [Path,setPath] = useState(null)
  const [Product, setProduct] = useState({})
  const {Details,setDetails} = useContext(Store);
  const [Pro, setPro] = useState({})
  const [flag,setflag] = useState(0)

  useEffect(()=>{
    setProduct({
      ...Pro,
      "Propic":Path,
    })
  },[Path])

  useEffect(()=>{
    setDetails(prevDetails=>[...Details, Product])
  },[Product])

  useEffect(()=>{
  },[Details])

  const Submitted = (event) =>{
    event.preventDefault();
    const Name = event.target.name.value
    const Brand = event.target.brand.value
    const Price = event.target.price.value
    const Size = event.target.size.value
    const text = event.target.text.value
    const file=event.target.pic.files[0]
    const pro = {
      "Proname":Name,
      "Probrand":Brand,
      "Proprice":Price,
      "Prosize":Size,
      "Prodesc":text
    }
    setPro(pro)
    const reader=new FileReader()
    reader.readAsDataURL(file)
    reader.onload=()=>{
      setPath(reader.result)
    }
    alert('Data added successfully');
  }
  return (
    <div className="body1">
      <form className="form" onSubmit={(event)=>Submitted(event)}>
        <div className="name">
            <label> Name* : &nbsp;</label>
            <input type="text" name="name" placeholder='Enter Product Name' className="box" required></input>
        </div>
        <div className="brand">
            <label> Brand* : &nbsp;</label>
            <input type="text" name="brand" placeholder='Enter Product Brand' className="box" required></input>
        </div>
        <div className="price">
            <label> Price* : &nbsp;</label>
            <input type="number" name="price" placeholder='Enter Product Price' className="box" required></input>
        </div>
        <div className="size">
            <label> Size* : &nbsp;</label>
            <input type="number" name="size" placeholder='Enter Product Size' className="box" required></input>
        </div>
        <div className="image">
            <label> Give Product Image* : &nbsp;</label>
            <input type="file" name="pic" ></input>
        </div>
        <div className="textarea">
          <label> Description: </label>
          <input type="textarea" name="text" placeholder='Add Product Description' className="box1"></input>
        </div>
        <div className="submit">
            <button type="submit" className="sub">Submit</button>
            <button type="reset" className="reset">Clear</button>
        </div>
      </form>
    </div>
  )
}

export default Form;
