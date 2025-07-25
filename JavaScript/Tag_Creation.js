function showtagcontent(){
    let tagname=document.getElementsByTagName("input")[0].value;
    let data=document.getElementsByTagName("input")[1].value;
    let newElement=document.createElement(tagname);
    newElement.innerText=data;
    newElement.setAttribute("style","color:green");
    let parent=document.getElementsByTagName("body")[0];
    parent.appendChild(newElement);
    console.log(newElement);
}