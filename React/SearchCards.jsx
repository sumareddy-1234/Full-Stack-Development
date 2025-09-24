import React,{useEffect,useState} from "react"; 
import './SearchCards.css'
const SearchCards=()=>{
    const [data,setData]=useState([
        {id:1,name:"Sofia"},
        {id:2,name:"Elsa"},
        {id:3,name:"Repunzel"},
        {id:4,name:"Mulan"},
        {id:5,name:"Anna"},
        {id:6,name:"Ariel"},
        {id:7,name:"Belle"},
        {id:8,name:"Jasmine"},
        {id:9,name:"Cinderella"},
        {id:10,name:"Tiana"},
        {id:11,name:"Merida"},
        {id:12,name:"Moana"},
        {id:13,name:"Pocahontas"},
        {id:14,name:"Aurora"},
        {id:15,name:"Snow White"},
        {id:16,name:"Smurfette"},
        {id:17,name:"Alice"},
        {id:18,name:"Wendy"},
        {id:19,name:"Dora"},
        {id:20,name:"Minnie"},   
    ]);
    const [text,setText]=useState("");
    const [filterData,setFilterData]=useState(data);

    useEffect(()=>{
        const filter=data.filter((item)=>item.name.toLowerCase().includes(text.toLowerCase()) || item.id.toString().includes(text));
        setFilterData(filter);
    },[text]);
    return(
        <>
        <div class="Parent">
        <input type="text" placeholder="search here" onChange={(e)=>setText(e.target.value)}/> 
        {filterData.map((item)=>(
            <div class="child">
                <h1>{item.name}</h1>
                <h1>{item.id}</h1>
            </div>
        ))}
        </div>
        </>
    );
}
export default SearchCards;
    