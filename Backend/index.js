import http from 'http';
const server=http.createServer((req,res)=>{
    console.log(req.method);
    if(req.url=="/users"){
        res.writeHead(200,{"Content-Type":"application/json"});
        res.end(JSON.stringify({name:"suma"}))
    }else{
        res.writeHead(200,{"contenr-Type":"text/plain"});
        res.end("Hello this is from backend")
    }
});
server.listen(7007,()=>{
    console.log(`server running at port ${7007}`)
});