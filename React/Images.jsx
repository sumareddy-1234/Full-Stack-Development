import React from "react";
import { useState } from "react";

const Images=()=>{
    const [ImagePath,setImagePath]=useState(null)
    const GetData=(event)=>{
        const file=event.target.files[0]
        const reader=new FileReader()
        reader.readAsDataURL(file)
        reader.onload=()=>{
            console.log(reader.result);
            setImagePath(reader.result)
        }
    }
    return(
        <>
        <input type="file" onChange={(event)=>GetData(event)}/>
        {
            ImagePath!=null?<img src={ImagePath} alt="Image Cracked"/>:<></>
        }
        </>
    )
}
export default Images;