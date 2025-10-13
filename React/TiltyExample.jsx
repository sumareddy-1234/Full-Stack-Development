import React from "react";
import Tilty from "react-tilty";
import image from "./assets/react.svg";
const TiltyExample=()=>{
    return(
        <>
        <Tilty>
            <img src={image} width={300} height={300} style={{background:"white"}}/>
        </Tilty>
        </>
    );
};
export default TiltyExample;