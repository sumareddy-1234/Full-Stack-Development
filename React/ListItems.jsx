import React from "react";
var L=["Apple","Banana","Grapes"];
const ListItems=()=>{
    return(
    <ol style={{color:"white"}}>
        {L.map(ele =>{
            console.log(ele);
            return <li>{ele}</li>
        })}
    </ol>
    );
};
export default ListItems;